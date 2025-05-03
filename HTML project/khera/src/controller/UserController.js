
const userModel = require('../model/usermodel')

exports.createuser = async (req,res)=>{

    try {

        const data = req.body
        const { name, email, password } = data;
       
        const CheckUser = await userModel.findOne({email:email})
        if(CheckUser) return res.status(400).send({ status: false, msg: "User Already Presnt Pls LogIn" })

        const UserDB = await userModel.create(data)
        res.status(201).send({ status: true, msg: 'Successfully Created Data', data: UserDB })

    }

    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}

// try{

//     const data = req.body
//     const {name, email, password} = data;

//      const createuser = await userModel.findOne({email:email})

     




//  }