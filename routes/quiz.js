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
        let sort = Math.floor(Math.random() * 19 + 1);
        if (!numeros.includes(sort)) {
            numeros.push(sort);
        }
    }
    var result = await db
        .query(
            `
            SELECT idquestion,
            json_question->'enunciado' AS enunciado,
            json_question->'respostas'->'q1'->>'pergunta' AS q1,
            json_question->'respostas'->'q2'->>'pergunta' AS q2,
            json_question->'respostas'->'q3'->>'pergunta' AS q3,
            json_question->'respostas'->'q4'->>'pergunta' AS q4 FROM quiz WHERE idquestion IN (${numeros})
        `
        )
        .then((resultado) =>
            res.json({ success: true, questions: resultado[0] })
        )
        .catch((err) => res.json({ success: false, code: err.code }));
});

router.get("/get-all-questions", async (req, res) => {
    const result = await db
        .query(
            `
            SELECT idquestion,
            json_question->'enunciado' AS enunciado,
            json_question->'respostas'->'q1' AS q1,
            json_question->'respostas'->'q2' AS q2,
            json_question->'respostas'->'q3' AS q3,
            json_question->'respostas'->'q4' AS q4,
            json_question->'key' AS key FROM quiz
        `
        )
        .then((resultado) =>
            res.json({ success: true, questions: resultado[0] })
        )
        .catch((err) => res.json({ success: false, code: err.original.code }));
});

router.put("/update-questions", async (req, res) => {
    try {
        Quiz.destroy({
            truncate: true
        })
            .then(() => {
                Quiz.bulkCreate(
                    req.body.questions.map((q) => {
                        return {
                            json_question: q,
                            points: 20
                        };
                    })
                )
                    .then((result) => {
                        res.json({
                            success: true,
                            result: result,
                            message: "Questões atualizadas com sucesso!"
                        });
                    })
                    .catch(() => {
                        throw new Error("Erro ao inserir novas questões");
                    });
            })
            .catch(() => {
                throw new Error("Erro ao deletar questões existentes");
            });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
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
        if (
            value[1].pergunta.trim() === dados.resposta.trim() &&
            value[1].certa === "true"
        ) {
            return "true";
        } else {
            return "false";
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
