const mailer = require("nodemailer");

module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //SSL/TLS
        auth: {
            user: 'mvsouza.af@gmail.com',
            pass: 'xxxxxx'
        }
    })
    
    const mail = {
        from: "Vidal <mvsouza.af@gmail.com>",
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        text: mensagem,
        //html: "<b>Opcionalmente, pode enviar como HTML</b>"
    }
    
    if(anexo){
        console.log(anexo);
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer
        })
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    })
}