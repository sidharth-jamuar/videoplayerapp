import React from "react"
import "../css/NavBar.css"
import {withRouter} from "react-router-dom"
import axios from "axios";
const NavBar=(props)=>{
    return(
        <div className="navbar">
        <div className="Logo"><span>VideoStream</span></div>
        <div className="searchBar">
      <input type="text" className="search"  placeholder="...Search by exact title or even ignore whitespaces" />
       
        </div>

        <div id="login"><button onClick={e=>{axios.get("/api/profile")}}>Profile</button></div>
       
        </div>
    )
}
export default withRouter(NavBar);