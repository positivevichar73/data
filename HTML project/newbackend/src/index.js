const mongoose=require("mongoose")
const express=require("express")
const dotenv = require("dotenv")
const {even}=require("./controller/usercontroller")
dotenv.config()

const port=2002
const app=express()

mongoose.connect(process.env.nikhil)
.then(()=>{console.log(`mongo db connected sucessfully`)})
.catch((e)=>{console.log(`mongo db error ${e}`)})

app.listen(port,()=>{console.log(`This server is running in this Port ${port}`)})

even(8)