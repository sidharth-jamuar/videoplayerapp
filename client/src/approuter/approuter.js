import React from "react";
import NavBar from "../components/NavBar"
import App from "../App"
import VideoList from "../components/VideoList"
import requireAuth from "../hoc/auth"
import Login from "../components/Login"
import Profile from "../components/Profile"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import VideoPlayer from "../components/VideoPlayer";
import Homepage from "../components/Homepage"
import playVideo from "../hoc/playVideo"
import Footer from "../components/Footer.js"
const AppRouter=()=>{
    return (
       <BrowserRouter>
       <div>
       <NavBar />
       <Route path="/" exact component={Homepage} />
       <Route path="/search" exact component={playVideo(VideoList)} />
       <Route path="/login" component={Login} />
       <Route path="/profile" component={requireAuth(Profile) } />
       <Route path="/video/:id" component={VideoPlayer} />
       <Footer />
       </div>
      
       </BrowserRouter>
    )
}
export default AppRouter