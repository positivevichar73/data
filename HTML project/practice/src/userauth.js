
const { validname, validmail, validpassword } = require("./validation/validation");

exports.Uservalidation=(req,res,next)=>{

try{
    const data = req.body;

    const {name, email, password}=data;

    if(!name) return res.status(400).send({status:false, msg:'Name is Required'})
    if(!validname (name)) return res.status (400).send ({status: false, msg:'Name is invalid'}) 

    if(!email) return res.status(400).send({status:false, msg:'Email is Required'})
    if(!validmail (email)) return res.status (400).send ({status: false, msg:'Email is invalid'}) 
    
    if(!password) return res.status(400).send({status:false, msg:'password is Required'})
     if(!validpassword (password)) return res.status (400).send ({status: false, msg:'password is invalid'}) 

      next()
}
catch(e){return res.status(500).send({status:false, msg: e.message})}
}