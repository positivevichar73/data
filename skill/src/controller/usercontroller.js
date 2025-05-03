
const usermodel=require('../model/usermodel')

exports.create = async (req,res)=>{
   try{
      
   const data = req.body
   console.log(data)
 
   const createDB = await usermodel.create(data)
    res.send({data:createDB})
 }

   catch(e){
       res.send(500).send({Status:false, message:e.message})
   }
}










// const usermodel = require ('../model/usermodel')

// exports.Create = async (req,res)=>{

//  try{
//     const data= req.body
//     console.log(data)
//     const createDB = await usermodel.create(data)
//     res.send({data:createDB})
//  }
 
//  catch(e){

//     res.send(500).send({Status:false, message:e.message})
 
//    }}
