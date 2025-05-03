const express=require("express")
const mongoose=require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const {even}=require("./usercontroller1")

const app=express()
const port=5000;
 
mongoose.connect(process.env.mong)

.then(()=>{console.log("Mongo DB is COnnected Successfully")})
.catch((error)=>{console.log("Mongo DB is Showing Error")})

app.listen(port,()=>{console.log(`Port Number is ERROR SHOWing ${port}`)})
even(1)