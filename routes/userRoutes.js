const passport=require('passport')
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
            console.log(req.user)
          res.redirect("/")
        }
      );
      app.get("/api/profile",(req,res)=>{
          console.log("profile")
          console.log(req.user)
      })
}