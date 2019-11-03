import React,{lazy,Suspense} from "react";
import NavBar from "../components/NavBar"
import requireAuth from "../hoc/auth"
import playVideo from "../hoc/playVideo"
import Footer from "../components/Footer.js"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {renderHomepage,renderLogin,renderProfile,renderVideoList,renderVideoPlayer}
from "./lazy"

const AppRouter=()=>{
    return (
       <BrowserRouter>
       <div>
       <NavBar />
       <Route path="/" exact component={renderHomepage} />
       <Route path="/search" exact component={playVideo(renderVideoList)} />
       <Route path="/login" component={renderLogin} />
       <Route path="/profile" component={requireAuth(renderProfile) } />
       <Route path="/video/:id" component={renderVideoPlayer} />
       <Footer />
       </div>
      
       </BrowserRouter>
    )
}
export default AppRouter