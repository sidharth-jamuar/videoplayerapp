const controllers=require("../controllers/videocontrollers")
module.exports=app=>{
   app.get("/api/videolist",controllers.getList)
    
    
}