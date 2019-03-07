const express=require("express");
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const {list}=require("./data/VideoList")
const keys=require("./config/keys").getKeys(process.env.NODE_ENV)
const PORT=process.env.PORT || 3004;

mongoose.Promise=global.Promise;
mongoose.connect(keys.mongoDBURI,{useNewUrlParser:true},()=>{
  console.log("connected to database")
})
app.use(bodyParser.json())
require("./routes/videoRoutes")(app)
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))