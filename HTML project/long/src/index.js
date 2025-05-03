const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const app=express();

const port=5000;

mongoose.connect(process.env.mongo)

.then(()=>{console.log("MONGO DB IS CONNECTED")})

.catch((error)=>{console.log(`MONGO DB IS SHOWING ERROR ${error}`)})


app.listen(port,()=>{console.log(`THIS IS SERVER RUNNING PROJECT ${port}`)})
