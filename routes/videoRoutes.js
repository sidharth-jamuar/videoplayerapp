const controllers=require("../controllers/videocontrollers")
module.exports=app=>{
   app.get("/api/videolist",controllers.getList)
    
   app.get("/api/:username/videolist",controllers.getUploadedVideos)
   app.post("/api/addvideo",controllers.addVideo)
}