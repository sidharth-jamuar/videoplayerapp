const {list}=require("../data/VideoList")
const mongoose=require('mongoose')
const {Video}=require("../models/videos")
exports.getList=(req,res)=>{
    Video.find().limit(10).then(videos=>{
        res.send(videos)
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