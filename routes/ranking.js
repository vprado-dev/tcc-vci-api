const express               = require('express');
const bodyParser            = require('body-parser');
const Ranking               = require('../database/models/ranking');
const User                  = require('../database/models/users');        
const jwt                   = require('jsonwebtoken');
const { route }             = require('./login');
const { db }                = require('../config/objetos')
const router                = express.Router();
const jsonParser = bodyParser.json();

router.get("/all", async function (req, res) {
    try{
        db.query(`SELECT * FROM ranking 
            INNER JOIN users ON ranking.iduser = users.iduser 
            INNER JOIN game ON ranking.idgame = game.idgame
            ORDER BY ranking.points DESC, ranking.time ASC;
        `)
        .then((resultados) => {
            res.json(resultados[0]);
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

router.get("/:game", async function (req, res) {
    try{
        db.query(`SELECT * FROM ranking 
            INNER JOIN users ON ranking.iduser = users.iduser 
            INNER JOIN game ON ranking.idgame = game.idgame
            WHERE game.idgame = ${req.params.game}
            ORDER BY ranking.points DESC, ranking.time ASC;
        `)
        .then((resultados) => {
            res.json(resultados[0]);
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

module.exports = router;