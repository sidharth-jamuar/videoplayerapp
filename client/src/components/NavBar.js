import React from "react"
import "../css/NavBar.css"
const NavBar=(props)=>{
    return(
        <div className="navbar">
        <span className="Logo">VideoStream</span>
        <span className="searchBar"><input type="text" className="search" onChange={e=>{props.searchVideo(e.target.value)}}
        placeholder="...Search by exact title or even ignore whitespaces" /></span>
        </div>
    )
}
export default NavBar;