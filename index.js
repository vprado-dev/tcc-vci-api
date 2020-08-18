const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const cors = require('cors');

//Banco
const db = require('./config/database');

app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    try{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        app.use(cors());
        next();
    }catch(e){
        console.error(e);
    }

});
//Testando conexão
try{
    db.authenticate();
    console.log('Conectou.');
}catch (error){
    console.error('Unable to connect to the database:', error);
}


app.get('/', async function(req,res){
});
//Rota login
app.use('/login', require('./routes/login'));

app.listen(3333,function(){
    console.log("Servidor ativo na porta 3333");
});