// prod.js - production keys here!!
module.exports = {
    
        mongoDBURI:process.env.MONGODB_URI,
        googleClientID:process.env.googleClientID,
    googleClientSecret:process.env.googleClientSecret,
    AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID,
AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY,
AWS_REGION:process.env.AWS_REGION,
AWS_BUCKET:process.env.AWS_BUCKET
         
  };
  