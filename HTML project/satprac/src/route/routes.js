const express=require("express")
const route=express.Router()

const {createuser, getall}=require("../controller/usercontroller.js")

// route.get("./get",get)
// route.post("./post",post)
// route.put("./put",put) 
// route.put("./deleted",deleted)

route.post("/createuser",createuser) 

route.get("/getall",getall)
module.exports = route;    

