const express=require("express");
const app=express();
const cors=require("cors")
const {list}=require("./data/VideoList")
const PORT=process.env.PORT || 3004;
app.use(cors({origin:"http://localhost:3000"}))
require("./routes/videoRoutes")(app)
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))