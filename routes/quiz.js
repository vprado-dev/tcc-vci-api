const express = require("express");
const Game = require("../database/models/game");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Quiz = require("../database/models/quiz");
const { db } = require("../config/objetos");
const authTk = require("../src/authToken");
/*
    Pegar 5 perguntas aleatórias,
    Validar as respostas e retornar os pontos

*/
router.get("/get-questions", async (req, res) => {
    var numeros = [];
    while (numeros.length < 5) {
        let sort = Math.floor(Math.random() * 19+1);
        if (!numeros.includes(sort)) {
            numeros.push(sort);
        }
    }
    var result = db
        .query(
            `select idquestion,json_question->'enunciado' as enunciado,    json_question->'respostas'->'q1'->>'pergunta' as q1,    json_question->'respostas'->'q2'->>'pergunta' as q2,    json_question->'respostas'->'q3'->>'pergunta' as q3,    json_question->'respostas'->'q4'->>'pergunta' as q4 from quiz where idquestion IN (${numeros})`
        )
        .then((resultado) =>
            res.json({ success: true, questions: resultado[0] })
        )
        .catch((err) => res.json({ success: false, code: err.code }));
});
router.post("/check-question", async (req, res) => {
    var dados = req.body;
    const result = await db
        .query(
            `select points,json_question from quiz where idquestion = ${dados.idquestion}`
        )
        .catch((err) => {
            res.json({ success: false, message: "Erro ao procurar questão" });
        });
    var respostas = Object.entries(result[0][0].json_question.respostas);
    var resultado = respostas.map((value, index) => {
        if(value[1].pergunta.trim() === dados.resposta.trim() && value[1].certa === 'true') {
            return 'true'
        } else {
            return 'false'
        }
    });
    if (resultado.includes("true")) {
        res.json({
            success: true,
            resultado: "Parabéns!! Alternativa Correta!",
            points: result[0][0].points
        });
    } else {
        res.json({ success: true, resultado: "Alternativa Incorreta!" });
    }
});

module.exports = router;
