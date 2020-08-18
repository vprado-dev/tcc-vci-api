const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const User = require('../models/users');
const { isNullOrUndefined } = require('util');

router.post('/',jsonParser, async function(req, res){

    const result = await User.findAll({
        where: {
            email_user : req.body.login,
            password_user : req.body.password
        }
    })
    .catch(function(err){
        console.log(err);
    });
    if(result.length != 0 && !isNullOrUndefined(result)){
        console.log(result.lenght);
        res.json({
            mensagem: "logou"
        });
    }else{
        console.log(result);
        res.json({
            mensagem: "n logou"
        });
    }
});

module.exports = router;