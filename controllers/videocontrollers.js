const {list}=require("../data/VideoList")
exports.getList=(req,res)=>{
    res.send(list)
}