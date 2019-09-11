import React from "react";
import SocialButton from "../hoc/socialButton"
import axios from "axios"
import {loginGoogleUser} from "../actions/user"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {keys} from "../config/keys"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faGoogle,faTwitter,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons"
const styleObj={
    color:"white",
    width:"40px",
    height:"40px"
}
class SocialButtons extends React.Component{
    constructor(props){
        super(props);
    }
    handleSocialLogin=(user)=>{
        console.log(user)
        axios.post("/api/googleLogin",user).then(res=>{
            this.props.loginGoogleUser(res.data,this.props.history)
        })
    }
    handleSocialLoginFailure=(error)=>{
        console.log(error)
    }
    renderButtons=()=>{
        const media=[{name:"google",appId:keys.googleAppId,icon:faGoogle},
        {name:"google",appId:keys.googleAppId,icon:faFacebook},
        {name:"google",appId:keys.googleAppId,icon:faInstagram},
        {name:"google",appId:keys.googleAppId,icon:faTwitter} ]
      return media.map((button,i)=>{ return(
            <div>
            <SocialButton
            className="login-social"
              provider={button.name}
              appId={button.appId}
              onLoginSuccess={this.handleSocialLogin}
              onLoginFailure={this.handleSocialLoginFailure}
            >
               <FontAwesomeIcon className="icon-fawesome" icon={button.icon} size="2x" color="white"/>
            </SocialButton>
          </div>
        )} )
    }
    render(){
        return(
            <div className="login-social-container">
                {this.renderButtons()}
            </div>
        )
    }
}

export default withRouter(connect(null,{loginGoogleUser})(SocialButtons));