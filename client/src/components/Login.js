import React,{Component} from "react";
import "../css/Login.css"
import {connect} from "react-redux"
import axios from "axios"
import {loginUser} from "../actions/user"
import {withRouter} from "react-router-dom"
import SocialButtons from "../components/SocialButtons"
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
        }
       
    }
    renderForm(){
    const formFields=[{label:"Username", name:"username",type:"text"},{label:"Password", name:"password",type:"password"}];
       return formFields.map((field,i)=>{
           return(
               <React.Fragment key={i}>
               <div className="field-container">
               <div className="label-field"> <label>{field.label}</label></div>
               <div className="input-field">
               <input  type={field.type} className="input"
                 onChange={e=>{this.handleChange(e.target.value,field.name)}} />
               </div>    
               
                 </div>
               </React.Fragment>
               
           )
        })
    }
    
    handleChange(value,name){
        this.setState({[name]:value})
    }
    onSubmit(e){
        e.preventDefault();
        const {username,password}=this.state
        const data={
            username,
            password
        }
        this.props.dispatch(loginUser(data,this.props.history))
    }
    
    render(){
        
        return(
            <div>
                <div className="form-container">
                <h4>Login to Chat</h4>
                <form onSubmit={e=>{this.onSubmit(e)}}>
                   {this.renderForm()}
                   <button type="submit" id="login-button">Login</button>
                </form>
                {/* <a href="https://videoplayerappsid.herokuapp.com/auth/google" id="google-login-button" >Login with Google</a> */}
                <SocialButtons />
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        users:state.users,
        isAuth:state.isAuth.auth
    }
}
export default withRouter(connect(mapStateToProps)(Login))