const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 4000;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

var salas = [];

var players = [];

//Para madar pacotes entre cliente e servidor pode-se Usar:
//- socket.on para 'Escutar' as requisicoes
//- socket.emit para mandar requisicoes
function createRoom(player) {
    console.log(player);
    salas[salas.length] = {
        num_sala: salas.length,
        id_sala: Math.random() * 1000,
        players: [player]
    };
}

function addPlayer(player) {
    salas[salas.length - 1].players.push(player);
}

io.on("connection", (socket) => {
    let playerNick = socket.handshake.query["nickName"];
    console.log("Novo usuario conectado.");
    players.push({
        id: socket.client.id,
        nick_name: playerNick,
        aux_totens: [],
        totem: [],
        available: false
    });
    if (salas.length != 0) {
        if (salas[salas.length - 1].players.length == 2) {
            players[players.length - 1].available = true;
            createRoom(players[players.length - 1]);
        } else {
            addPlayer(players[players.length - 1]);
            console.log(salas[salas.length - 1].players);
            io.emit("ready", [
                salas[salas.length - 1].players[0],
                salas[salas.length - 1].players[1]
            ]);
        }
    } else {
        players[players.length - 1].available = true;
        createRoom(players[players.length - 1]);
    }

    console.log(players);

    function findRoombyPID(PID) {
        for (var i = 0; i < salas.length; i++) {
            for (var a = 0; a < salas[i].players.length; a++) {
                if (salas[i].players[a].id === PID) {
                    return i;
                }
            }
        }
    }

    function findPlayer(PID) {
        for (var i = 0; i < players.length; i++) {
            if (players[i].id === PID) {
                return i;
            }
        }
    }

    function sortfunction(a, b){
        return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
    }


    socket.on("acertou", (args) =>{
        console.log(args);
        var room_index = findRoombyPID(args.id);
        if(salas[room_index].players.length > 1){
            for (var i = 0; i < salas[room_index].players.length; i++) {
                if (salas[room_index].players[i].id === args.id) {
                    salas[room_index].players[i].aux_totens.push(args.totem);
                    salas[room_index].players[i].aux_totens.sort(sortfunction);
                    var aux = salas[room_index].players[i].aux_totens[0];
                    var count = 0;
                    for(var j = 0; j< salas[room_index].players[i].aux_totens.length; j++){
                        if(aux == salas[room_index].players[i].aux_totens[j]){
                            count++;
                            if(count == 3){
                                salas[room_index].players[i].totem.push(aux);
                                console.log(salas[room_index].players[i].totem);
                                io.emit("conquistaTotem", salas[room_index].players);
                            }
                        }else{
                            aux = aux_totens[j];
                            count = 0;
                            j--;
                        }
                    }
                }
            }
        }

    });

    socket.on("errou", (args) => {
        var room_index = findRoombyPID(args);

        if (salas[room_index].players.length > 1) {
            for (var i = 0; i < salas[room_index].players.length; i++) {
                if (salas[room_index].players[i].id === args) {
                    salas[room_index].players[i].available = false;
                    if (!i) {
                        salas[room_index].players[1].available = true;
                    } else {
                        salas[room_index].players[0].available = true;
                    }
                }
            }
            io.emit("swap", salas[room_index].players);
        } else {
            console.log("Apenas um jogador conectado");
        }
    });

    socket.on("disconnect", () => {
        console.log("Usuario desconectado.");
    });
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
