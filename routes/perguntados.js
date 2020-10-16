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

    console.log(result);
});
module.exports = router;
