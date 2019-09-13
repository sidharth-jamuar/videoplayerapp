const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    username:String,
    id:String,
    password:String,
   requests:{type:Array}
})
const User=mongoose.model('user',userSchema)

module.exports={User}