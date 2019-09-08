const {list}=require("../data/VideoList")
const mongoose=require('mongoose')
const {Video}=require("../models/videos")
exports.getList=(req,res)=>{
    Video.find().limit(10).then(videos=>{
        res.send(videos)
    })
}
exports.uploadVideo=(req,res)=>{

  const video= new Video({
       title:req.body.title,
       Description:req.body.Description,
       Url:req.file.originalname.split(" ").join("").trim(),
       image:"deku.jpg",
        tags:["anime","music"],
        uploader:req.body.user
   })
   video.save().then(video=>{console.log(req.body.user);
   Video.find({uploader:req.body.user}).then(videos=>{
       res.send(videos)
   })
  })
}
exports.searchVideo=(req,res)=>{
    console.log(req.query)
    let regexp=new RegExp(`${req.query.keyword}`,'gi');
    Video.find({title:regexp}).then(videos=>{
        console.log(videos)
        res.send(videos)
    })
}
exports.getUploadedVideos=(req,res)=>{
    console.log(req.query)
    Video.find({uploader:req.query.user}).then(videos=>{
        res.send(videos)
    })
}
exports.addVideo=(req,res)=>{
    console.log(req.body)
    new Video(req.body).save().then(video=>{
        res.send(video)
    })
}
exports.addTagsToVideo=(req,res)=>{
    console.log(req.query)
    Video.findOneAndUpdate({_id:req.query.id},
        {$push:{tags:{$each:[req.query.tag1]}}},{$new:true})
    .then(video=>res.send(video))

}
exports.deleteTagFromVideo=(req,res)=>{
    console.log(req.query)
    Video.findOneAndUpdate({_id:req.query.id},
        {$pull:{tags:req.query.tag1}},
{$new:true})
    .then(video=>{console.log(video);res.send(video)})
}
exports.fetchLatestVideos=(req,res)=>{
    Video.find({}).sort({uploaded:-1}).limit(5)
    .then(video=>res.send(video))
}
exports.incrementView=(req,res)=>{
    console.log(req.query.id)
    Video.findOneAndUpdate({_id:req.query.id},{$inc:{views:1}},{$new:true})
    .then(video=>{res.send(video)})
}
exports.fetchMostViewedVideos=(req,res)=>{
    Video.find({}).sort({views:-1}).limit(5)
    .then(video=>res.send(video));
}