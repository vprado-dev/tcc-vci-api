var nodemailer = require("nodemailer");

async function sendMail(destinatario, assunto, texto) {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: "gmail",
        secure: true,
        auth: {
            user: "treinamentos.vci@gmail.com",
            pass: "tccvci123"
        }
    });
    var mailOptions = {
        from: "treinamentos.vci@gmail.com",
        to: destinatario,
        subject: assunto,
        html: texto
    };
    var email = await transporter
        .sendMail(mailOptions)
        .catch((err) => console.log(err));
    return email;
}
module.exports = sendMail;
