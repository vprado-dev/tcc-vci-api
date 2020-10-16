const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("../database/models/users");
const jwt = require("jsonwebtoken");
const router = express.Router();

const jsonParser = bodyParser.json();

router.post("/", jsonParser, async function (req, res) {
    const user = {
        nickname_user: req.body.login,
        password_user: req.body.password
    };

    const result = await User.findAll({
        where: {
            nickname_user: user.nickname_user,
            cpf_user: user.password_user
        }
    }).catch(function (err) {
        res.json({
            success: "false",
            message: "Erro ao buscar usuário em nossa base de dados."
        });
    });
    if (result.length > 0) {
        var busca = result.map(function (value, index) {
            if (bcrypt.compareSync(user.password_user, value.password_user)) {
                var token = jwt.sign(
                    value.dataValues,
                    process.env.STRING_TOKEN_ENCODE,
                    {
                        expiresIn: "10h"
                    }
                );
                return {
                    admin: value.admin,
                    token: token
                };
            }
        });
        if (busca.length > 0) {
            res.status(200).json({
                success: "true",
                message: "Usuário conectado com sucesso.",
                data: busca[0]
            });
        }
    } else {
        res.status(401).json({
            success: "false",
            message: "Erro! Usuário não encontrado."
        });
    }
});
router.post("/teste-token", jsonParser, async function (req, res) {
    const token = req.body.token;
    if (token) {
        jwt.verify(token, process.env.STRING_TOKEN_ENCODE, function (
            err,
            decoded
        ) {
            if (err) {
                return res.json({
                    success: "false",
                    message: "Falha ao tentar autenticar o token!"
                });
            } else {
                req.decoded = decoded;
                res.json({
                    success: "true"
                });
            }
        });
    }
});
module.exports = router;
