import React from "react"
import "../css/NavBar.css"
import "../css/buttons.css"
import {withRouter} from "react-router-dom"
import axios from "axios";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {isAuthenticated} from "../actions/user"
import { FaUserAlt} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import {searchVideo,clearSearchList} from "../actions/search"
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:""
        }
        const isAuth=localStorage.getItem("token")
       this.props.dispatch(isAuthenticated(isAuth))
    }
    componentDidMount(){
        document.addEventListener("scroll",(e)=>{
            e.preventDefault();
            if(window.scrollY > 300){
                document.getElementById("navbar").classList.remove("navbar");
                document.getElementById("navbar").classList.add("solid-navbar")
            }
            else if(window.scrollY <=300){
                document.getElementById("navbar").classList.remove("solid-navbar");
                document.getElementById("navbar").classList.add("navbar")
            }
        })
    }

onlogout=(e)=>{
    console.log(this)
e.preventDefault();
localStorage.removeItem("token");
const isAuth=false
this.props.dispatch(isAuthenticated(isAuth,this.props.history))
}

render(){
    
    const isAuth=this.props.isAuth.auth
    console.log(this.state)
    return(
        <div className="navbar" id="navbar">
        <div className="Logo"><span style={{cursor:"pointer"}} onClick={e=>{this.props.history.push("/")}}>VideoStream</span></div>
        <div className="searchBar">
      <input type="text" className="search"  placeholder="...Search "
      onChange={e=>{this.setState({keyword:e.target.value})}} />
       <button className="btn-common btn-search" onClick={e=>{this.props.dispatch(clearSearchList());this.props.dispatch(searchVideo(this.state.keyword,this.props.history))}}>Search</button>
        </div>
        <div className="main-buttons-container">
        <ul className="buttons-container">
        {isAuth && <li className="button-item">
            <button className="btn-common btn-profile" onClick={e=>this.props.history.push("/profile")}>Profile</button></li>}
     {!isAuth &&
         <li className="button-item"><Link className="btn-login btn-common" to="/login" >Login</Link></li>}
     {!isAuth 
        && <li className="button-item"><button className="btn-common btn-signup">SignUp</button></li> }
       {isAuth
         && <li className="button-item"><button onClick={e=>{this.onlogout(e)}} ><IoIosLogOut className="icon-common"/></button></li>}
        </ul>
        </div>
        </div>
    )
    
}
}
const mapStateToProps=state=>{
    return {
        isAuth:state.isAuth
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));