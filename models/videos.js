const mongoose=require("mongoose");
const {Schema} =mongoose;

const videoSchema=new Schema({
    title:{type:String, default:"Your video title"},
    Description:{type:String, default:"Your video title"},
    Url:{type:String},
    image:{type:String},
    tags:{type:Array},
    uploaded:{type:Date,default:Date.now()},
    uploader:{type:String},
    private:{type:Boolean,default:false},
    views:{type:Number,default:0},
    access:{type:Array},
    UploadDate:{type:String,default:new Date().toLocaleString()}
})
const Video=mongoose.model('video',videoSchema)
module.exports={Video}
