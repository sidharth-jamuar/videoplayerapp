const redisClient=require("../redis/redisClient")
module.exports={
    checkCache:function(redisClient) {

    return (req, res, next) => {
        const { id } = req.params;
      
        redisClient.get(id, (err, data) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          //if no match found
          if (data != null) {
            res.send(data);
          } else {
            //proceed to next middleware function
            next();
          }
        });
      }
    },
    checkCacheForVideoSearch:function() {
        return (req,res,next) => {
            const {keyword}=req.query;

            redisClient.get(keyword, (err , data) => {
                if(err) {
                    res.status(500).send(err);
                }
                if(data !==null) {
                    console.log("redis store",data)
                    res.send(data)
                }
                else {
                    next();
                }
            })


        }
    }
    }
