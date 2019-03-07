const {list}=require("../data/VideoList")
const mongoose=require('mongoose')
const {Video}=require("../models/videos")
exports.getList=(req,res)=>{
    Video.find().limit(10).then(videos=>{
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