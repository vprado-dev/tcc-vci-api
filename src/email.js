var nodemailer = require("nodemailer");
var sg = require("sendgrid")(process.env.SENDGRID_API_KEY);

//With callback
async function sendMail(destinatario, assunto, texto) {
    var request = sg.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: {
            personalizations: [
                {
                    to: [
                        {
                            email: destinatario
                        }
                    ],
                    subject: assunto
                }
            ],
            from: {
                email: "eduardomaciel007@hotmail.com"
            },
            content: [
                {
                    type: "text/plain",
                    value: texto
                }
            ]
        }
    });
    var envio = await sg.API(request).catch((error) => {
        //error is an instance of SendGridError
        //The full response is attached to error.response
        console.log(error.response.statusCode);
    });
    return envio;
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
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
