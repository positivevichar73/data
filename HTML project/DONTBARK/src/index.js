const express = require('express')
const mongoose = require('mongoose')
const {create}= require ('./controller/usercntroller')
app = express();

const port = 8000;

mongoose.connect('mongodb+srv://positivevichar73:gcbjY3KVs6LH2C5c@cluster0.4zjqu.mongodb.net/')
.then(() => { console.log(`MONgo is Connected Succefully`) })
.catch((e) => { console.log(`Mongo DB is SHowing Error`, e) })

app.get('/user',create)

app.listen(port, () => { console.log(`Port NUmber is this: ${port}`) })
