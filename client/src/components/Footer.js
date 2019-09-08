import React from "react";
import "../css/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faSearch,faUser,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import screenIsMobile from "../hoc/isMobile"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
const Footer=(props)=>{
    console.log(props)
    const isAuth=props.isAuth
    return (
        <React.Fragment>
            {props.isMobile && <div className="footer-container">
    
            <FontAwesomeIcon className="icon-fawesome" icon={faHome} size="2x" color="white" onClick={e=>props.history.push("/")}/>
            <FontAwesomeIcon className="icon-fawesome" icon={faSearch} size="2x" color="white" />
            {isAuth &&<FontAwesomeIcon className="icon-fawesome" icon={faUser} size="2x" color="white" />}
            {!isAuth && <FontAwesomeIcon className="icon-fawesome" icon={faUser} size="2x" color="white" onClick={e=>{props.history.push("/login")}} />}
            <FontAwesomeIcon className="icon-fawesome" icon={faArrowLeft} size="2x" color="white" />
            </div>}
        </React.Fragment>
         
    )
}
const mapStateToProps=state=>{
    return{
        isAuth:state.isAuth.auth
    }
}

export default withRouter(connect(mapStateToProps)(screenIsMobile(Footer)))