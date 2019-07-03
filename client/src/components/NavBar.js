import React from "react"
import "../css/NavBar.css"
import {withRouter} from "react-router-dom"
import axios from "axios";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {isAuthenticated} from "../actions/user"
import { FaUserAlt} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import {searchVideo} from "../actions/search"
class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyword:""
        }
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
    console.log(this.state)
    return(
        <div className="navbar">
        <div className="Logo"><span>VideoStream</span></div>
        <div className="searchBar">
      <input type="text" className="search"  placeholder="...Search by exact title or even ignore whitespaces"
      onChange={e=>{this.setState({keyword:e.target.value})}} />
       <button onClick={e=>{this.props.dispatch(searchVideo(this.state.keyword))}}>Search</button>
        </div>

        {isAuth && <div id="login"><FaUserAlt className="user-profile icon-common" onClick={e=>this.props.history.push("/profile")} /></div>}
       {!isAuth && <div><Link to="/login" ><MdSend className="icon-common"/></Link></div>}
       {isAuth && <div><button onClick={e=>{this.onlogout(e)}} ><IoIosLogOut className="icon-common"/></button></div>}
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