const controllers=require("../controllers/videocontrollers")
const multer=require("multer");
const storage=multer.diskStorage({
   destination:function(req,file,cb){
      cb(null,"./client/public/assets/videos")
   },
   filename:function(req,file,cb){
      cb(null,file.originalname.trim().split(" ").join(""))
   }
})
const upload=multer({storage})
module.exports=app=>{
   app.get("/api/videolist",controllers.getList)
   app.post("/api/uploadVideo",upload.single('video'),controllers.uploadVideo)
   app.get("/api/searchVideo",controllers.searchVideo)
   app.get("/api/user/videolist",controllers.getUploadedVideos)
   app.post("/api/addvideo",controllers.addVideo),
   app.get("/api/addTagsToVideo",controllers.addTagsToVideo)
   app.get("/api/deleteTagFromVideo",controllers.deleteTagFromVideo)
}