const express               = require('express');
const bodyParser            = require('body-parser');
const Ranking               = require('../database/models/ranking');
const User                  = require('../database/models/users');        
const jwt                   = require('jsonwebtoken');
const { route }             = require('./login');
const { db }                = require('../config/objetos')
const router                = express.Router();
const jsonParser = bodyParser.json();

router.get("/all/:id", async function (req, res) {
    const dados  = req.params.id;
    console.log(dados);
    try{
        db.query(`SELECT
                ranking.idranking, ranking.iduser, ranking.time,  ranking.points,
                game.name_game
                FROM ranking INNER JOIN game ON ranking.idgame = game.idgame
                WHERE ranking.iduser = ${dados}
                ORDER BY ranking.points DESC, ranking.time ASC;`)
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

router.post("/rank-by-game", async function (req, res) {
    const dados = req.body;
    console.log(dados);
    try{
        db.query(`SELECT
                ranking.idranking, ranking.iduser, ranking.time,  ranking.points,
                game.name_game
                FROM ranking INNER JOIN game ON ranking.idgame = game.idgame
                WHERE ranking.iduser = ${dados.idUser} AND game.idgame = ${dados.idGame}
                ORDER BY ranking.points DESC, ranking.time ASC;
        `)
        .then((resultados) => {
            res.json(resultados[0]);
        })
        .catch(function (err) {
            // console.log(err);
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message,
        });
    }
})

module.exports = router;