import nodmailer from 'nodemailer'
import { template } from './public/htmlEmail.js';


const transport = nodmailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: Number(process.env.PORT_EMAIL),
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    },
    tls: {
    rejectUnauthorized: false
}
})


export async function SendEmail(email: string, code: number) {

    transport.sendMail({
    from: process.env.USER,
    to: email,
    subject: 'teste de envio',
    html: template(code),
    text: 'Olá mundo'
})
.then(info => {
    console.log('Email enviado:');
})
.catch(err => {
    console.error('Erro ao enviar email:', err);
});
  
}

