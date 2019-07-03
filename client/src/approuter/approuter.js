import React from "react";
import NavBar from "../components/NavBar"
import App from "../App"
import VideoList from "../components/VideoList"
import requireAuth from "../hoc/auth"
import Login from "../components/Login"
import Profile from "../components/Profile"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import VideoPlayer from "../components/VideoPlayer";
const AppRouter=()=>{
    return (
       <BrowserRouter>
       <div>
       <NavBar />
       <Route path="/" exact component={VideoList} />
       <Route path="/login" component={Login} />
       <Route path="/profile" component={requireAuth(Profile) } />
       <Route path="/video/:id" component={VideoPlayer} />
       </div>
      
       </BrowserRouter>
    )
}
export default AppRouter