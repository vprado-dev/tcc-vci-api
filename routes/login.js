const express               = require('express');
const bodyParser            = require('body-parser');
const User                  = require('../database/models/users');
const jwt                   = require('jsonwebtoken');
const { isNullOrUndefined } = require('util');
const router                = express.Router();

const jsonParser = bodyParser.json();


router.post('/',jsonParser, async function(req, res){

    const user = {
        nickname_user : req.body.login,
        password_user : req.body.password
    };
    const result = await User.findAll({
        where: user
    })
    .catch(function(err){
        res.json({
            success : 'false',
            message: 'Erro ao procurar usuário na base de dados'
        })
    });
    if(result.length != 0 && !isNullOrUndefined(result)){
        var token = jwt.sign(user,process.env.STRING_TOKEN_ENCODE,{
            expiresIn: "10h"
        });
        res.json({
            success : 'true',
            message : 'Usuário conectado com sucesso',
            token   :  token
        });
        // res.redirect('/');
    }else{
        res.json({
            success : 'false',
            message : 'Usuário não conectado'
        });
    }
});
router.post('/teste-token',jsonParser,async function(req, res){
    const token = req.body.token;
    if (token) {
        jwt.verify(token, process.env.STRING_TOKEN_ENCODE, function (err, decoded) {
            if (err) {
                return res.json({
                    success: 'false',
                    message: 'Falha ao tentar autenticar o token!'
                });
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded;
                res.json({
                    success : 'true'
                })
            }
        });
    }
})
module.exports = router;