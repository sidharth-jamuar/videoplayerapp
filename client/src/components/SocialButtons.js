import React from "react";
import SocialButton from "../hoc/socialButton"
import axios from "axios"
import {loginGoogleUser} from "../actions/user"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {keys} from "../config/keys"
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
        const media=[{name:"google",appId:keys.googleAppId}]
      return media.map((button,i)=>{ return(
            <div>
            <SocialButton
              provider={button.name}
              appId={button.appId}
              onLoginSuccess={this.handleSocialLogin}
              onLoginFailure={this.handleSocialLoginFailure}
            >
              Login with Google
            </SocialButton>
          </div>
        )} )
    }
    render(){
        return(
            <div>
                {this.renderButtons()}
            </div>
        )
    }
}

export default withRouter(connect(null,{loginGoogleUser})(SocialButtons));