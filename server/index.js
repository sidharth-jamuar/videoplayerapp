const express=require("express");
const app=express();
const cors=require("cors")
const {list}=require("./data/VideoList")
const PORT=process.env.PORT || 3004;
//app.use(cors({origin:"http://localhost:3000"}))
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