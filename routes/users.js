const express               = require('express');
const bodyParser            = require('body-parser');
const User                  = require('../database/models/users');
const jwt                   = require('jsonwebtoken');
const { route } = require('./login');
const router               = express.Router();
const jsonParser = bodyParser.json();


router.get('/all',jsonParser,async function (req, res) {
    try {
        User.findAll()
        .then(function (resultados) {
            res.json(resultados);
        })
        .catch(function () {
            throw new Error("Erro ao procurar todos os usuários");
        });
    }catch(e) {
        res.json({
            success: false,
            message: e.message
        })
    }
})
router.get('/ids',jsonParser,async function (req,res,next){
    try {
        const result = await User.findAll({
            where : {
                iduser : req.body.ids
            }
        })
        if(result.length >0 ) {
            res.json(result);
        } else {
            throw new Error("Ids inexistentes");
        }
    } catch (e) {
        res.json({
            sucess : false,
            message: e.message
        })
    }
})
router.get("/:id",jsonParser,async function (req, res, next) {
    try{
        const result = await User.findAll({
            where: {
                iduser : req.params.id
            }
        })
        if(result.length > 0) {
            res.json(result)
        } else {
            throw new Error("Erro ao procurar usuário pelo id");
        }
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
})
router.post('/',jsonParser,async function (req,res,next){
    try {
        const dados = req.body;
        const result = await User.create({
            name_user : dados.name,
            nickname_user: dados.nickname,
            email_user : dados.email,
            cpf_user : dados.cpf,
            password_user : dados.password,
            admin :dados.admin
        })
        if(result !== null) {
            res.json(result)
        } else {
            throw new Error("Erro ao criar usuário")
        }
    } catch (e) {
        res.json({
            sucess: false,
            message: e.message,
            error : e.parent
        });
    }
})
module.exports = router;