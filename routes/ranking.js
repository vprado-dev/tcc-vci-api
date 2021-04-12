const express               = require('express');
const { db }                = require('../config/objetos')
const router                = express.Router();

router.get("/all", async function(req, res) {
    try{
        db.query(`
            SELECT
                ranking.idranking, ranking.iduser, ranking.time,  ranking.points,
                game.name_game, users.name_user
            FROM ranking INNER JOIN game ON ranking.idgame = game.idgame
            INNER JOIN users ON ranking.iduser = users.iduser 
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
});

router.get("/all/:id", async function (req, res) {
    const dados  = req.params.id;
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

router.get("/:game", async function (req, res) {
    const dados = req.params;
    const idGame = dados.game;
    console.log(dados);
    try{
        db.query(`SELECT * FROM ranking 
            INNER JOIN users ON ranking.iduser = users.iduser 
            INNER JOIN game ON ranking.idgame = game.idgame
            WHERE game.idgame = ${idGame}
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