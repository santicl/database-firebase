const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendEmail = functions.database.ref('contactForms/{pushId}').onWrite((change, context) => {
    const formData = change.after.val();
    const { name, email, cel } = formData;

    const nodemailer = require('nodemailer');



    // aqui deben configurarlo de acuerdo a los datos de su empresa
    // recuerden que la configuracion la hacen en un archivo .env
    // como el user y el pass
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'santiagojulio202301@gmail.com',
            pass: '01JulioSantiago'
        }
    })

    const mailOptions = {
        from: `"${name}" <${email}`,
        to: 'correodeempresa@gmail.com', // Correo de empresa
        subject: 'Nuevo asunto',
        text: cel
    }

    return transporter.sendMail(mailOptions).then((info) => {
        console.log('Correo enviado: %s', info.messageId);
        return null;
    }).catch((err) => {
        console.log('Error al enviar el formulario', err);
        return null;
    })
})