"use strict";
const nodemailer = require("nodemailer");

async function sendMail(content, reciverAddress) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "Gmail",

    auth: {
      user: "devdesapp2020@gmail.com",
      pass: "A1s2d3f4g5",
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  console.log(reciverAddress);

  const mailInfo ={
    from: '"devdesapp2020@gmail.com"', // sender address
    to: reciverAddress, // list of receivers
    subject: "New projects for you", // Subject line
    text: "Los cursos",
    html: content, // plain text body
  }

  transporter.sendMail(mailInfo, function(error) {
    if (error){
        console.log(error);
        return;
    }
    console.log('Message sent');
    transporter.close();
  });
}

sendMail().catch(console.error);

module.exports = {sendMail}