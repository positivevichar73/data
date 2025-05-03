// const momgoose = require('mongoose')

// const userschema = new momgoose.Schema({

//     Name: { type: String, trim: true, required: true },
//     EMAIL: { type: String, trim: true, unique: true },
//     Password: { type: String, trim: true, required: true }

// })
    
// timestamps(true)

// module.exports = momgoose.model('UserDB', userschema)

const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

Name:{ type: String, trim: true, required: true},
EMAIL: { type: String, trim: true, required: true}

})
