const controllers=require("../controllers/videocontrollers")
const aws=require('aws-sdk');
const multerS3=require('multer-s3');
const multer=require("multer");
const path=require("path")

const storage=multer.diskStorage({
   destination:function(req,file,cb){
      cb(null,path.resolve(__dirname,".././client/public/assets/videos"));
   },
   filename:function(req,file,cb){
      cb(null,file.originalname.trim().split(" ").join(""))
   }
})

const upload=multer({storage})
module.exports=app=>{
   app.get("/api/videolist",controllers.getList)
   app.post("/api/uploadVideo",upload.single('video'),controllers.uploadVideo);
   // app.post("/api/uploadVideo",(req,res)=>{ upload( req, res, ( error ) => {
   //       console.log( 'requestOkokok', req.file );
   //       console.log( 'error', error );
   //       if( error ){
   //        console.log( 'errors', error );
   //        res.json( { error: error } );
   //       } else {
   //        // If File not found
   //        if( req.file === undefined ){
   //         console.log( 'Error: No File Selected!' );
   //         res.json( 'Error: No File Selected' );
   //        } else {
   //         // If Success
   //         const imageName = req.file.key;
   //         const imageLocation = req.file.location;
   //     // Save the file name into database into profile model
   //     res.json( {
   //          image: imageName,
   //          location: imageLocation
   //         } );
   //        }
   //       }
   //      })},controllers.uploadVideo);
   app.get("/api/searchVideo",controllers.searchVideo)
   app.get("/api/user/videolist",controllers.getUploadedVideos)
   app.post("/api/addvideo",controllers.addVideo)
   app.get("/api/addTagsToVideo",controllers.addTagsToVideo)
   app.get("/api/latestVideos",controllers.fetchLatestVideos)
   app.get("/api/mostViewedVideos",controllers.fetchMostViewedVideos)
   app.get("/api/deleteTagFromVideo",controllers.deleteTagFromVideo)
   app.get("/api/incrementView",controllers.incrementView)
}