const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const cors = require('cors');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize
(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`);




app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/', async function(req,res){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

app.post('/login', jsonParser,async function(req, res){
    console.log(req.body);

    res.json({
        mensagem: "teste"
    });
});

app.listen(3333,function(){
    console.log("Servidor ativo na porta 3333");
});