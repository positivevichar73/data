const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
const {Evenodd} = require("./controller/usercontroller")
dotenv.config()

const app=express();
const port=2002;


mongoose.connect(process.env.mangooseurl)

.then(()=>{console.log(`mongo db connected`)})
.catch((e)=>{console.log(`mongo db connected sucessfully${e}`)})

app.listen(port,()=>{console.log(`thisd serve ris running on this port ${port}`)})

Evenodd(32)
