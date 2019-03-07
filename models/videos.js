const mongoose=require("mongoose");
const {Schema} =mongoose;

const videoSchema=new Schema({
    title:{type:String, default:"Your video title"},
    Description:{type:String, default:"Your video title"},
    Url:{type:String},
    image:{type:String},
    uploaded:{type:Date,default:Date.now()},
    uploader:{type:String}
})
const Video=mongoose.model('video',videoSchema)
module.exports={Video}
