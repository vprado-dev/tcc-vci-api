const express               = require('express');
const bodyParser            = require('body-parser');
const Game                  = require('../database/models/game');      
const jwt                   = require('jsonwebtoken');
const { route }             = require('./login');
const { db }                = require('../config/objetos')
const router                = express.Router();
const jsonParser            = bodyParser.json();

router.get("/all", async function (req, res) {
    try{
        Game.findAll()
        .then((resultados) => {
            res.json(resultados);
        })
        .catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
        });
    }
})

router.get("/:id",jsonParser,async function (req, res, next) {
    try{
        const result = await Game.findOne({
            where: {
                idgame : req.params.id
            }
        })
        if(result.length > 0) {
            res.json(result)
        } else {
            throw new Error("Erro ao procurar jogo pelo id");
        }
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
})

module.exports = router;