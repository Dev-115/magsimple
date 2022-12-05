"use strict";
import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper


export default async function mailer(email, subject, message) {

    // }
    // async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            // user: testAccount.user, // generated ethereal user
            // pass: testAccount.pass, // generated ethereal password
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"MAGG TEAM DEV 👻" <foo@example.com>', // sender address
        to: email,//"ptslearner5@gmail.com", // list of receivers
        subject: subject,//"Hello ✔", // Subject line
        // text: message,//"Hello world?", // plain text body
        html: "<b>" + message + "</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// handler().catch(console.error);