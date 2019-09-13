const mongoose=require('mongoose')
const {User}=require("../models/users")
const {Video}=require("../models/videos")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const saltRounds = 10;
exports.loginUser=async (req,res)=>{
   
   const user=await User.findOne({username:req.body.username})
   console.log(user._id)
     const isMatch=await bcrypt.compare(req.body.password,user.password)
    if(isMatch){
      var token=jwt.sign({foo:"bar"},"bohothard")
      res.send({username:user.username,token,requests:user.requests})
    }
    else{
        return res.send({error:"user not found"})
    }
}
    

exports.signup=(req,res)=>{
    bcrypt.hash(req.body.password,saltRounds).then(hash=>{
        const user=new User({
            username:req.body.username,
            id:req.body.id,
            password:hash
        });
    user.save().then(doc=>res.send(doc))
    })

}
exports.googleLogin=(req,res)=>{
   
    const user=new User({
        username:req.body._profile.name,
        id:req.body._profile.id
    })
    User.find({id:req.body._profile.id}).then(doc=>{
        if(doc.length> 0){
            console.log(doc)
            res.send({username:doc[0].username,token:req.body._token.accessToken,requests:doc[0].requests})
        }
        else{
            user.save().then(doc=>{console.log(doc); res.send({username:req.body._profile.name,token:req.body._token.accessToken,requests:[]})})
        }
    })
   
   
}
