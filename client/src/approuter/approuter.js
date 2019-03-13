import React from "react";
import NavBar from "../components/NavBar"
import App from "../App"

import requireAuth from "../hoc/auth"
import Login from "../components/Login"
import Profile from "../components/Profile"
import {BrowserRouter,Route,Switch} from "react-router-dom"
const AppRouter=()=>{
    return (
       <BrowserRouter>
       <div>
       <NavBar />
       <Route path="/" exact component={App} />
       <Route path="/login" component={Login} />
       <Route path="/profile" component={requireAuth(Profile) } />
       </div>
      
       </BrowserRouter>
    )
}
export default AppRouter