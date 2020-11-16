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
        totens: [],
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
