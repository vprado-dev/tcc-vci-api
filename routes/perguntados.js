const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Question = require('../database/models/questions');


router.get("/:id", async function (req, res) {
    console.log(req.params);
    const questions = {
        totem_fk: req.params.id,
    }

    const result = await Question.findAll({
        where: {
            totem_fk: questions.totem_fk,
        },
    }).catch(function (err) {
        res.json({
            success: "false",
            message: "Erro!",
        });
    });

    if(result.length > 0){
        var busca = result.map((value, index)=>{
            return value.dataValues;
        })

        var sort = Math.floor((Math.random()*(busca.length)));
        return res.status(200).json({
            success:"true",
            message:"Pergunta selecionada",
            data: busca[sort],
        })
    }

    console.log(result);


});

router.get("/pergunta/:id", async function(req, res){
    const questions = {
        idquestion: req.params.id,
    }

    const result = await Question.findAll({
        where: {
            idquestion: questions.idquestion,
        },
    }).catch(function (err) {
        res.json({
            success: "false",
            message: "Erro!",
        });
    });
    if(result.length > 0){
        // var busca = result.map((value, index)=>{
        //     return value.dataValues;
        // });

        // var sort = Math.floor((Math.random()*(busca.length)));
        return res.status(200).json({
            success:"true",
            message:"Pergunta selecionada",
            data: result,
        })
    }
});

module.exports = router;
