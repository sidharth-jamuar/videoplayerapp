const passport=require('passport')
const controllers=require("../controllers/usercontrollers")
module.exports=app=>{
    app.get(
        '/auth/google',
        passport.authenticate('google', {
          scope: ['profile', 'email']
        })
      );
    
      app.get(
        '/auth/google/redirect',
        passport.authenticate('google'),
        (req, res) => {
            console.log(req.user)//defined
         res.redirect("/") //not going to localhost:3000
          //res.send({isAuth:true}) //where to handle this as in front end there is an <a> tag
        }
      );
      app.get("/api/profile",(req,res)=>{
          console.log("profile")
          console.log(req.user)//undefined
      })
      app.post("/api/login",controllers.loginUser)
      app.post("/api/googleLogin",controllers.googleLogin)
      app.post("/api/signup",controllers.signup)
     
}