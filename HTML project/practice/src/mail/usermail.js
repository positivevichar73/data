   const nodemailer = require("nodemailer");
require("dotenv").config()

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 465,
  service:"gmail",
  secure: true, 
  auth: {
    user: process.env.NodemailerUSER,
    pass:  process.env.NodeMailerPassword,
  },

});

exports.otpsend=async()=>{
    
    const info = await transporter.sendMail({
      from: "Maddison Foo Koch 👻",
      to: "dhimannikhil254@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      // text: "Nikhil DHiman", // plain text body
      html: "<i>Nikhil Dhiman</i>", // html body
    
    });
  
    console.log("Message sent: %s", info.messageId);
  } 
  // catch(e) {console.log(e.message)}

// exports.otpsend = async.sendMail({

  
// })
