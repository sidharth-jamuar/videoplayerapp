const http=require("http")
const express=require("express");
const app=express();
const server=http.createServer(app);
const io=require("socket.io");
const axios=require('axios')
const mongoose=require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser=require('body-parser')
const cors=require('cors')
//const keys=require("./config/keys").getKeys(process.env.NODE_ENV)
const keys=require("./config/keys")
const redisClient=require("./redis/redisClient")
const redisMiddleWare=require('./middlewares/redis')
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   if ('OPTIONS' == req.method) {
//        res.send(200);
//    } else {
//        next();
//    }
//   });
app.use(cors({origin:"http://localhost:3000"}))

const PORT=process.env.PORT || 3004;

mongoose.Promise=global.Promise;
mongoose.connect(keys.mongoDBURI,{useNewUrlParser:true, useUnifiedTopology: true },()=>{
  console.log("connected to database")
})
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/videoRoutes")(app)
require("./routes/userRoutes")(app)

app.get("/starships/:id",redisMiddleWare.checkCache(redisClient), async (req, res) => {
  try {
    const { id } = req.params;
    const starShipInfo = await axios.get(
      `https://swapi.co/api/starships/${id}`
    );

    //get data from response
    const starShipInfoData = starShipInfo.data;
      console.log(starShipInfoData)
    //add data to Redis
    redisClient.setex(id, 3600, JSON.stringify(starShipInfoData));

    return res.json(starShipInfoData);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('/route1', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
server.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))