import React from "react";
import SocialLogin from "react-social-login"
const Button=(props)=>{
    return(
        <button  id="google-login-button" onClick={e=>props.triggerLogin()} {...props}>
            {props.children}
        </button>
    )
}
export default SocialLogin(Button);