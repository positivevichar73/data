// const mongoose = require("mongoose")
// const express = require("express")
// const dotenv = require("dotenv")
// const {evenodd} = require("./controller/usercontroller")
// dotenv.config()
// const app = express() 

// const port = 5000;
// mongoose.connect(process.env.mongoUrl)
//     .then(() => { console.log(`Mongo DB is Connected succesfull`)})
//     .catch((e) => { console.log(`Mongo DB Show Error ${e}`)})

// app.listen(port, () => { console.log(`This is server is running on this port=${port}`) })
// console.log( evenodd(32))

// const mongoose=require("mongoose")
// const express=require("express")
// const dotenv=require("dotenv")
// const {evenodd}=require("./controller/usercontroller.js")
// const route = require("./Route/route.js")
// const app=express()
// const port=5001;
// mongoose.connect(process.env.mongoUrl)
// .then(()=>{console.log("Mango DB is COnnected")})
// .catch((e)=>{console.log(`Mongo DB is showing Error ${e}`)})
// app.use('/', route); // Mount the router at '/api'
// app.listen(port,()=>{console.log(`This is server running on this Project ${port}`)})

// These All Packages

const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
const route = require("./Route/route.js") // Route is a path


dotenv.config() // Configration is like we attach the file

const app = express() // Call to express and store in app variable


app.use(express.json())

const port = 5000; // Giving a one port number

mongoose.connect(process.env.Nikhil) // connect to mongo

// Then is use for if mangodb is connected so show msg its Connected Successfully
    .then(() => {
        console.log("Mongo Db is Connected Successfully")
    })

    // Catch is use for if mangodb is not connected so show msg SHOWING ERROR
    .catch((e) => {
        console.log(`Mongo DB is Showing Error ${e}`)
    })

app.use("/", route)
app.listen(port, () => {
    console.log(`This is Server Running project ${port}`)
})



