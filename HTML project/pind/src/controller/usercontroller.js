
const usermodel = require('../model/usermodel')
const {} = require('../')

exports.Create = async (req, res) => {
  
   try {
  
      const data = res.body
     const {name, email, password} = data;
      const nameRegex = /^[a-zA-Z\s]+$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
 
      const CheckUser = await usermodel.findone({email:email})
      if(name) return res.status(400).send({status:false,msg:"PLease ProvidE A VALID NAME"})
       if(!nameRegex.test(name)) return res.status(400).send({status:false,msg:"Invalid NAME"})

         if(email) return res.status(400).send({status:false, msg:"Bhai Email Tom DAALde Pahle"})
            if(!emailRegex.test (email)) return res.status(400).send({status:false, msg:"Email GAlt hai "})

if (password) return res.status(400).send({status:false, msg:"Sahi WALI EMAIL DAAL ISMe"})
 if (!passwordRegex) return res.status (400).send ({status:false, msg:"Password Galat HAi"})
      // if (!name) return res.status(400).send({ status: false, msg: "Please Provide Name" })
      //    if (!nameRegex.test(name)) return res.status(400).send({ status: false, msg: "Invalid Name!" })
 



    }
   
   catch (e) {
      res.status(500).send({ status: false, message: e.message })
   }
}

// const useModel = require('../model/usermodel')

// exports.Create = async (req, res) => {

//     try {
//         const data = req.body
//         res.send({ data: CreateDB })
//     }
//     catch (e) {
//         res.status(500).send({ status: false, message: e.message })
//     }

// }