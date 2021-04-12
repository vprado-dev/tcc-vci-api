const express               = require('express');
const Game                  = require('../database/models/game');      
const router                = express.Router();

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

router.get("/:id",async function (req, res, next) {
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