var nodemailer = require("nodemailer");

function sendMail(res, destinatario, assunto, texto) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "treinamentos.vci@gmail.com",
            pass: "tccvci123",
        },
    });
    var mailOptions = {
        from: "treinamentos.vci@gmail.com",
        to: destinatario,
        subject: assunto,
        html: texto,
    };
    let resposta;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({
                error: error,
            });
        } else {
            res.json({
                mensagem: "Email enviado: " + info.response,
            });
        }
    });
}
module.exports = sendMail;
