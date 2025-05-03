
const express = require('express')
const mongoose = require ('mongoose')
const routes = require('./route/routes')

app = express();
app.use(express.json)

mongoose.connect('mongodb+srv://positivevichar73:gcbjY3KVs6LH2C5c@cluster0.4zjqu.mongodb.net/')

.then (()=>{console.log(`Mongo DB is connected Successfully`)})
.catch((e)=>{console.log(`MongoDB is Showing Error TODAY`,e)})

const port = 5000;
app.use('/', routes)

app.listen(port,()=>{console.log(`Server is Running On RIght pOrt: ${port}`)
})

// // This code is for create DATA 

// const express= require('express')
// const mongoose = require('mongoose')
// const routes=require('./route/route')

// app=express();
// app.use(express.json())

// mongoose.connect('mongodb+srv://positivevichar73:gcbjY3KVs6LH2C5c@cluster0.4zjqu.mongodb.net/')
// .then(()=>console.log('MongoDB Connected!'))
// .catch((e)=>console.log('MongoDB Error',e))

// const port = 3000;
// app.use('/',routes)
// app.listen(port,(()=>{console.log(`This Server is Running: ${port}`)}))
 



// // const express=require("express")

// // const route=express()

// // const port=3000;

// // route.get('/test',(req,res)=>{
// //     res.send("Hellow WOrld")
// // })


// // route.listen(port,()=>{console.log(`Server is Running On Port:${port}`)})












// // // const express = require('express');
// // // const app = express();

// // // app.get('/', (req, res) => {
// // //   res.send('Hello, World!');
// // // });

// // // app.listen(3000, () => { console.log('Server running at http://localhost:3000');
// // // });


