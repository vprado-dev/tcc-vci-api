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
function createRoom(player){
    console.log(player);
    salas[salas.length] = {
        num_sala : salas.length,
        id_sala : Math.random()*1000,
        players : [player]
    };
}

function addPlayer(player){
    salas[salas.length-1].players.push(player);
}


io.on("connection", (socket) => {
    console.log("Novo usuario conectado.");
    players.push({
        id : socket.client.id,
        totens : [],
        available : false
    });
    if(salas.length != 0){
        if(salas[salas.length-1].players.length == 2 ){
            createRoom(players[players.length-1]);
        }else{
           addPlayer(players[players.length-1]);
        }
    }else{
        createRoom(players[players.length-1]);
    }
   
    console.log(salas);
    
    
    socket.on("errou", (args) =>{
        if(players.length > 1){
            for(var i = 0; i<players.length; i++){
                if(players[i].id === args){
                    players[i].available = false;
                    if(!i){
                        players[1].available = true;
                    }else{
                        players[0].available = true;
                    }
                }
            }
        }else{
            console.log("Apenas um jogador conectado");
        }
        
    });

    socket.on("disconnect", () => {
        console.log("Usuario desconectado.");
    });
});


server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
