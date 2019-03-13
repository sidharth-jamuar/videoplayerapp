import React,{Component} from "react";
import {connect} from "react-redux"
class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.user)
        return(
            <div>
               
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        user:state.users.user
    }
}
export default connect(mapStateToProps)(Profile);