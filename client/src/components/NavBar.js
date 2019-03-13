import React from "react"
import "../css/NavBar.css"
import {withRouter} from "react-router-dom"
import axios from "axios";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {isAuthenticated} from "../actions/user"
class NavBar extends React.Component{
    constructor(props){
        super(props);
        const isAuth=localStorage.getItem("token")
       this.props.dispatch(isAuthenticated(isAuth))
    }
onlogout(e){
e.preventDefault();
localStorage.removeItem("token");
const isAuth=false
this.props.dispatch(isAuthenticated(isAuth))
}

render(){
    
    const isAuth=this.props.isAuth.auth
  
    return(
        <div className="navbar">
        <div className="Logo"><span>VideoStream</span></div>
        <div className="searchBar">
      <input type="text" className="search"  placeholder="...Search by exact title or even ignore whitespaces" />
       
        </div>

        {<div id="login"><button onClick={e=>this.props.history.push("/profile")} className="login-button">Profile</button></div>}
       {!isAuth && <div><Link to="/login" className="login-button">Login</Link></div>}
       {isAuth && <div><button onClick={e=>{this.onlogout(e)}} className="login-button">Logout</button></div>}
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