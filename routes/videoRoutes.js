const controllers=require("../controllers/videocontrollers")
module.exports=app=>{
   app.get("/api/videolist",controllers.getList)
   app.get("/api/searchVideo",controllers.searchVideo)
   app.get("/api/:username/videolist",controllers.getUploadedVideos)
   app.post("/api/addvideo",controllers.addVideo),
   app.get("/api/addTagsToVideo",controllers.addTagsToVideo)
   app.get("/api/deleteTagFromVideo",controllers.deleteTagFromVideo)
}