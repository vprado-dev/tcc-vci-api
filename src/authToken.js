const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (
        req.body !== null &&
        req.body.tk !== null &&
        req.body.tk !== undefined
    ) {
        jwt.verify(req.body.tk, process.env.STRING_TOKEN_ENCODE, function (
            err,
            decoded
        ) {
            if (err) {
                console.log("Retornando erro");
                res.status(401).json({
                    success: "false",
                    message: "Usuário não autenticado!"
                });
            } else {
                next();
            }
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Requisição invalida, usuário não autenticado"
        });
    }
};
