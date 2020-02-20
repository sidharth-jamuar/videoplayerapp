import React,{Component} from "react";
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
import {connect} from "react-redux";
import {incrementView} from "../actions/videos"
import {sendVideoRequest} from "../actions/user"
import axios from "axios"
class VideoPlayer extends Component{
    constructor(props){
        super(props)
       this.video=React.createRef();
       
    }
    componentDidMount(){
        const video=this.props.location.state.activeVideo;
        console.log(this.props)
        if(this.props.user===undefined){
            this.props.incrementView(video._id)
        }
        if( this.props.user && video.uploader !==this.props.user.username)
        {
        this.props.incrementView(video._id)
        }
    }
    componentDidUpdate(prevProps){
        console.log(this.props)
        console.log(prevProps)
        const video=this.props.location.state.activeVideo;
        if(this.props.user!==prevProps.user){
          
        }
    }
    doesUserHaveAccess=()=>{
        const video=this.props.location.state.activeVideo;
       
     const x=video.access.find(item=>item===this.props.user.username)
     console.log(x)
        if(x){
            return true
        }
        else{
            return false
        }
    }
    render(){
      
        const targetInfo=this.props.location.state.activeVideo
        console.log(targetInfo)
        if(this.props.user===undefined && targetInfo.private){
            return <div className="video-is-private">
            This video has been marked private by the user.If you want to view this video please send a request to the uploader.
            Please Login to send request.
            <div className="request-send-container">
                <button className="btn-common btn-cancel" onClick={e=>{this.props.history.push("/")}}>Go To Homepage</button>
                <button className="btn-request btn-common" onClick={e=>{this.props.history.push("/login")}}>Login</button>
            </div>
            </div>
        }
        if( this.props.user &&targetInfo.private && (targetInfo.uploader !==this.props.user.username && !this.doesUserHaveAccess())){
            return <div className="video-is-private">
                This video has been marked private by the user.If you want to view this video please send a request to the uploader.
                <div className="request-send-container">
                    <button className="btn-common btn-cancel" onClick={e=>{this.props.history.push("/")}}>Cancel</button>
                    <button className="btn-request btn-common" onClick={e=>{this.props.sendVideoRequest(targetInfo.uploader,this.props.user.username,targetInfo.title,targetInfo._id,this.props.history)}}>Send Request</button>
                </div>
                </div>
        }
 
        return(
            <div className="react-player-container">
                <div className="react-player"><ReactPlayer url={targetInfo.Url} controls playing ref={this.video} pip  width="100%" height="100%"/></div>
                
                <div className="target-info-container">
                {targetInfo.views && <div><span>Views:</span>{targetInfo.views}</div>} 
                {targetInfo.title && <div><span>Title:</span>{targetInfo.title}</div>}  
              {targetInfo.Description && <div><span>Description:</span>{targetInfo.Description}</div>}  
             
                </div>
              
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
    user:state.users.user
    }
}
const mergeProps=(stateProps,dispatchProps,ownProps)=>{
   return Object.assign({},ownProps,{
       user:stateProps.user,
       incrementView:dispatchProps.incrementView,
       sendVideoRequest:dispatchProps.sendVideoRequest
    })
}
export default connect(mapStateToProps,{incrementView,sendVideoRequest},mergeProps)(VideoPlayer);