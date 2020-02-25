const redis=require('redis');


const REDIS_PORT=process.env.REDISCLOUD_URL || 6379;

const redisClient=redis.createClient(REDIS_PORT,{no_ready_check: true});

module.exports=redisClient;