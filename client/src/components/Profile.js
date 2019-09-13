import React,{Component} from "react";
import {connect} from "react-redux"
import "../css/Profile.css"
import "../css/spinner.css"
import "../css/buttons.css"
import {uploadVideo,fetchMyVideos} from "../actions/videos"
import {declineRequest,approveRequest} from "../actions/user"
import axios from "axios"
class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedFile:null,
            selectedImage:null,
            showVideos:false,
            uploadLink:false,
            requests:false,
            private:false,
            title:"",
            Description:""
        }
    }
    playVideo=(activeVideo)=>{
        console.log(activeVideo);
        this.props.history.push({pathname:`/video/${activeVideo._id}`,state:{activeVideo}})
    }
    
  
    onSubmit=(e)=>{
        e.preventDefault();
        const fd=new FormData();
        fd.append('video',this.state.selectedFile,this.state.selectedFile.name);
        fd.append('title',this.state.title);
        fd.append('Description',this.state.Description);
        fd.append('user',this.props.user.username)
        fd.append('private',this.state.private)
       this.props.dispatch(uploadVideo(fd))
       this.setState({uploadLink:false,showVideos:true})
    }
    renderMyVideos=()=>{
        const {userVideos}=this.props.videos
        return userVideos.map(video=>{
            return(
                <React.Fragment key={video._id} >
                <div className="own-video-data-container" onClick={e=>{this.playVideo(video)}}>
                <div className="own-video-image-container">
                <img src={`/assets/images/${video.image}`} width="200px" height="300px"/>
                </div>
                <div className="own-video-information-container">
                <div>{video.title}</div>
                <div>{video.Description}</div>
                </div>
                </div>
               
               </React.Fragment>
            ) 
        }
            )
    }
    renderRequests=()=>{
        return this.props.user.requests.map((request,i)=>{
            return (
                <div  key={i} className="request">
                <div>{request.username} wants to view your video {request.video}</div>
                <div className="buttons-request">
                <button className="btn-cancel btn-common" onClick={e=>{this.props.declineRequest(request.username,request.uploader)}}>Decline</button>
                <button className="btn-cancel btn-request" onClick={e=>{this.props.approveRequest(request.username,request.id,request.uploader)}}>Approve</button>
                </div>
                </div>
            )
        })
    }
    handleCheckBox=(e)=>{
        const name=e.target.name;
        const value=e.target.checked;
        this.setState({
            [name]:value
        })
    }
    openMyVideos=()=>{
        this.setState(prevstate=>{return{showVideos:!prevstate.showVideos,requests:false}});
        this.props.dispatch(fetchMyVideos(this.props.user.username))
    }
    render(){
        console.log(this.props)
        return(
            
            <div className="profile-container">
            <div className="profile-data">
            <ul className="profile-list">
           <li className="profile-list-item"> Welcome {this.props.user.username}</li>
           <li  className="profile-list-item" onClick={e=>{this.setState(prevstate=>{return{uploadLink:!prevstate.uploadLink,showVideos:false}})}}>Upload Video</li>
           <li  className="profile-list-item" onClick={e=>{this.openMyVideos()}}>My Videos</li>
           <li className="profile-list-item" onClick={e=>this.setState(prevstate=>{return{uploadLink:false,showVideos:false,requests:!prevstate.requests}})}>Requests</li>
            </ul>
            </div>
            <div className="profile-body">
            {this.state.showVideos? <div className="own-video-container">
            {this.props.videos.userVideos && this.props.videos.userVideos.length >0? <div className="own-video-card-container">{this.renderMyVideos()}</div>:<div className="loader" />}
            </div>:null}
            {this.state.requests?
            this.props.user.requests && this.props.user.requests.length >0?<div className="requests-container">
                {this.renderRequests()}
            </div>:<div>You have no pending requests</div>:null}
            </div>
            {this.state.uploadLink &&   <div className="upload-container">
            <div className="form-container">
            <form onSubmit={this.onSubmit}>
            <span className="cross-icon" onClick={e=>{this.setState({uploadLink:false})}}>X</span>
            <h3 className="heading-upload">Upload Video</h3>
            <div className="input-container">
            <input className="input-file" type="file" onChange={e=>{this.setState({selectedFile:e.target.files[0]})}}/>
            </div>
            <div className="input-container">
            <label className="label-upload">Title</label><input className="input-text" type="text" onChange={e=>{this.setState({title:e.target.value})}} value={this.state.title}/>
            </div>
            <div className="input-container">
            <label className="label-upload">Description</label><input className="input-text" type="text" onChange={e=>{this.setState({Description:e.target.value})}} value={this.state.Description}/>
            </div>
            <div className="input-container">
            <label className="label-upload" id="private-label">Private</label><input className="input-text" type="checkbox" name="private" checked={this.state.private} onChange={e=>{this.handleCheckBox(e)}}/>
            </div>
           
            <button type="submit" className="btn-submit" id="upload-submit">Upload</button>
            </form>
            </div>
            </div>}
            </div>
           
        )
    }
}
const mapStateToProps=state=>{
    return{
        user:state.users.user,
        videos:state.videos
    }
}
export default connect(mapStateToProps,{declineRequest,approveRequest})(Profile);