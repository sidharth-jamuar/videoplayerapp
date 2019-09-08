import React,{Component} from "react";
import {connect} from "react-redux"
import "../css/Profile.css"
import "../css/spinner.css"
import "../css/buttons.css"
import {uploadVideo,fetchMyVideos} from "../actions/videos"
class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedFile:null,
            selectedImage:null,
            showVideos:false,
            uploadLink:false
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
        fd.append('user',this.props.user)
       
       this.props.dispatch(uploadVideo(fd))
       this.setState({uploadLink:false,showVideos:true})
    }
    renderMyVideos=()=>{
        
        return Object.keys(this.props.videos).map(video=>{
            return(
                <div className="card-container" onClick={e=>{this.playVideo(this.props.videos[video])}}>
                <div className="data-container">
                <div className="image-container">
                <img src={`/assets/images/${this.props.videos[video].image}`} />
                </div>
                <div className="information-container">
                <div>{this.props.videos[video].title}</div>
                <div>{this.props.videos[video].Description}</div>
                </div>
                </div>
               
                </div>
            ) 
        }
            )
    }
    openMyVideos=()=>{
        this.setState(prevstate=>{return{showVideos:!prevstate.showVideos}});
        this.props.dispatch(fetchMyVideos(this.props.user))
    }
    render(){
        console.log(this.props.videos)
        return(
            <div>
            <div className="profile-container">
            <div className="profile-data">
            <ul className="profile-list">
           <li className="profile-list-item"> Welcome {this.props.user}</li>
           <li  className="profile-list-item" onClick={e=>{this.setState(prevstate=>{return{uploadLink:!prevstate.uploadLink,showVideos:false}})}}>Upload Video</li>
           <li  className="profile-list-item" onClick={e=>{this.openMyVideos()}}>My Videos</li>
            </ul>
            </div>
            <div className="profile-body">
            {this.state.uploadLink &&   <div className="upload-container">
            <div className="form-container">
            <form onSubmit={this.onSubmit}>
            <span className="cross-icon" onClick={e=>{this.setState({uploadLink:false})}}>X</span>
            <div className="input-container">
            <input className="input-file" type="file" onChange={e=>{this.setState({selectedFile:e.target.files[0]})}}/>
            </div>
            <div className="input-container">
            <label>Title</label><input className="input-text" type="text" onChange={e=>{this.setState({title:e.target.value})}} />
            </div>
            <div className="input-container">
            <label>Description</label><input className="input-text" type="text" onChange={e=>{this.setState({Description:e.target.value})}}/>
            </div>
           
            <button type="submit" className="btn-submit">Upload</button>
            </form>
            </div>
            </div>}
          
            {this.state.showVideos ?
            <div className="own-video-container">
            {Object.keys(this.props.videos).length >0?<div>{this.renderMyVideos()}</div>:<div className="loader" />}
            </div>:null}
            </div>
            </div>
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
export default connect(mapStateToProps)(Profile);