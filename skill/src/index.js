const express = require("express")
const routes = require("./route/routes");
const mongoose = require("mongoose");

app = express();
app.use(express.json()) 
const port = 3000;

mongoose.connect('mongodb+srv://positivevichar73:gcbjY3KVs6LH2C5c@cluster0.4zjqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log("Mongo DB iS Connected Succefully")})
.catch((e)=>{console.log("Mongo DB IS SHowing ERroR")})

app.use('/',routes)

app.listen(port, () => { console.log(`Your Server is running ${port} on this port Number`)})