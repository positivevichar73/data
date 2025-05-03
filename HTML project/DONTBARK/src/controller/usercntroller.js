exports.create =(req,res)=>{
    
  try{
           res.send("Hello HY BY")
   }
  catch(e) {return res.status(500).send({status:false,msg:e.message})}

}