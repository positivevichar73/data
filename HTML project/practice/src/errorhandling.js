exports.errorhandlingData=(error, res)=>{       

if(error.name == "Type Error" || error.name == "ValidationError")
{
    return res.status(400).send({status:false, message: error.message})
}

if(error.code == "11000")
{
    return res.status (400).send ({status: false, message: "User Already Present"});
}

return res.status(500).send({status:false, message:error.message})

}