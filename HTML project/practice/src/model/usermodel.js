

const mongoose = require("mongoose")
const { validname, validmail, validpassword } = require('../validation/validation')

const userschema = new mongoose.Schema({

    profileImg:{type:{public_id:{ type:String}, secure_url:{type:String},},require:false},

    name: {
        type: String, trim: true,
        required: [true, "Name is Required"], validate: [validname, "Invalid Name"]
    },

    email: {
        type: String, trim: true, unique:true,
        required: [true, " Email Is Required"], validate: [validmail, "Invalid Email"]
    }, 

    password: {
        type: String, trim: true,
        required: [true, "password is Required"], validate: [validpassword, "Invalid Password"]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('UserDB', userschema)













// const userschema = new mongoose.Schema({
//     name:{type:String,required:"true",trim:true},
//     emailid:{type:String,required:"true",trim:true,unique:true},
//     password:{type:String,required:"true",trim:true},
// },

// {timestamps:true}

// );
// module.exports=mongoose.model("nikhil",userschema)


// const mongoose = require("mongoose")
// const userschema = new mongoose.schema({

//     Name:{ type: String, trim: true, required: "true" },
//     Mail:{ type: String, trim: true, required: "true",unique:true },
//     Password:{ type: String, trim: true, required: "true"},

//     {timestamps: true }
// );

// module.exports = mongoose.model("data", userschema)
