import React from "react";
import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faSearch,faUser,faArrowLeft,faPlay,faSignInAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import screenIsMobile from "../hoc/isMobile"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {searchVideo} from "../actions/search"
class  Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchBar:false,
            keyword:""
        }
    }
    render()
    {
    const isAuth=this.props.isAuth
    return (
      <React.Fragment>
            {this.props.isMobile && !this.state.searchBar && <div className="footer-container">
    
            <FontAwesomeIcon className="icon-fawesome" icon={faHome} size="2x" color="white" onClick={e=>this.props.history.push("/")}/>
            <FontAwesomeIcon className="icon-fawesome" icon={faSearch} size="2x" color="white" onClick={e=>{this.setState({searchBar:true})}}/>
            <FontAwesomeIcon className="icon-fawesome" icon={faPlay} size="2x" color="white" onClick={e=>this.props.dispatch(searchVideo("",this.props.history))} />
            {isAuth &&<FontAwesomeIcon className="icon-fawesome" icon={faUser} size="2x" color="white" />}
            {!isAuth && <FontAwesomeIcon className="icon-fawesome" icon={faSignInAlt} size="2x" color="white" onClick={e=>{this.props.history.push("/login")}} />}
           {isAuth && <FontAwesomeIcon className="icon-fawesome" icon={faSignOutAlt} size="2x" color="white" />}
            </div>}
            {this.props.isMobile && this.state.searchBar && 
            <div className="searchBar-footer-container">
                <input type="text" id="search-input-footer"  onChange={e=>{this.setState({keyword:e.target.value})}}/>
                <FontAwesomeIcon className="icon-fawesome" id="btn-footer" icon={faSearch} size="2x" color="white" onClick={e=>this.props.dispatch(searchVideo(this.state.keyword,this.props.history))}/>
                <div className="close-btn" onClick={e=>{this.setState({searchBar:false})}}>x</div>
            </div>}
            </React.Fragment>
         
    )
            }
        }
const mapStateToProps=state=>{
    return{
        isAuth:state.isAuth.auth
    }
}

export default withRouter(connect(mapStateToProps)(screenIsMobile(Footer)))