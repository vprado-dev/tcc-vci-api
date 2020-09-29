const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { route } = require("./login");
const router = express.Router();
const jsonParser = bodyParser.json();
const sendMail = require("../src/email");
router.use(jsonParser);
router.get("/all", async function (req, res) {
    try {
        User.findAll()
            .then(function (resultados) {
                res.json(resultados);
            })
            .catch(function () {
                throw new Error("Erro ao procurar todos os usuários");
            });
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
        });
    }
});
router.get("/ids", async function (req, res, next) {
    try {
        const result = await User.findAll({
            where: {
                iduser: req.body.ids,
            },
        });
        if (result.length > 0) {
            res.json(result);
        } else {
            throw new Error("Ids inexistentes");
        }
    } catch (e) {
        res.json({
            sucess: false,
            message: e.message,
        });
    }
});
router.post("/", async function (req, res, next) {
    try {
        const dados = req.body;
        const salt = bcrypt.genSaltSync(12);
        dados.password = bcrypt.hashSync(dados.cpf, salt);
        dados.nickname = dados.nome.charAt(0).toUpperCase() + dados.sobrenome;
        dados.nome += dados.sobrenome;
        dados.admin = false;
        console.log(dados);
        const result = await User.create({
            // tratar melhor todos os erros, esta com muita brecha ainda
            name_user: dados.nome,
            nickname_user: dados.nickname,
            email_user: dados.email,
            cpf_user: dados.cpf,
            password_user: dados.password,
            admin: dados.admin,
        });
        if (result !== null) {
            console.log(result);
            res.json(result);
        } else {
            throw new Error("Erro ao criar usuário");
        }
    } catch (e) {
        res.json({
            sucess: false,
            message: e.message,
            error: e.parent,
        });
    }
});
router.post("/email", async function (req, res) {
    var dados = req.body;
    sendMail(res,dados.destinatario, dados.assunto, dados.texto)
});
router.post("/check-valid-email",async function (req, res,next) {
    var dados = req.body;
    var result = await User.findOne({
        where : {
            email_user : dados.email
        }
    });
    sendMail(res,dados.email,"Esqueci minha senha","Olá, sua senha do treinamento da empresa VCI é :" + result.cpf_user) // pode melhorar com um html
})
module.exports = router;
