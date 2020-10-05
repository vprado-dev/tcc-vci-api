const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 4000;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

//Para madar pacotes entre cliente e servidor pode-se Usar:
//- socket.on para 'Escutar' as requisicoes
//- socket.emit para mandar requisicoes

io.on("connection", (socket) => {
    console.log("Novo usuario conectado.");

    socket.on("disconnect", () => {
        console.log("Usuario desconectado.");
    });
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
