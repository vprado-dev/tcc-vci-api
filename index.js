const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./config/objetos");
const morgan = require("morgan");
const app = express();
dotenv.config();

const jsonParser = bodyParser.json();

//Banco
app.use(morgan("dev"));
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        );
        app.use(cors());
        next();
    } catch (e) {
        console.error(e);
    }
});
//Testando conexão
try {
    db.authenticate();
    console.log("Conectou.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
app.use(bodyParser.json());
app.get("/", async function (req, res) {});
//Rota login
app.use("/login", require("./routes/login"));
app.use("/users", require("./routes/users"));
app.use("/ranking", require("./routes/ranking"));
app.use("/game", require("./routes/game"));
app.use("/perguntados", require("./routes/perguntados"));
app.use("/quiz", require("./routes/quiz"));
app.use((error, req, res, next) => {
    res.json({
        error
    });
});
var port = 3333;
app.listen(process.env.PORT, function () {
    console.log("Servidor ativo na porta " + port);
});
