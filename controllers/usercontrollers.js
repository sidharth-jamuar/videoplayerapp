const mongoose=require('mongoose')
const {User}=require("../models/users")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const saltRounds = 10;
exports.loginUser=async (req,res)=>{
   
   const user=await User.findOne({username:req.body.username})
   console.log(user._id)
     const isMatch=await bcrypt.compare(req.body.password,user.password)
    if(isMatch){
      var token=jwt.sign({foo:"bar"},"bohothard")
      res.send({username:user.username,token})
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
    console.log(req.body._profile)
    res.send({username:req.body._profile.name,token:req.body._token.accessToken})
}
