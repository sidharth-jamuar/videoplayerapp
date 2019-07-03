import React,{Component} from "react";
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
class VideoPlayer extends Component{
    constructor(props){
        super(props)
       this.video=React.createRef();
       
    }
    componentWillUpdate(){
        const targetInfo=this.props.location.state.activeVideo
         localStorage.setItem(`${targetInfo.title}`,this.video.current.getCurrentTime())
        
       
    }
    componentWillUnmount(){
        const targetInfo=this.props.location.state.activeVideo
        localStorage.setItem(`${targetInfo.title}`,this.video.current.getCurrentTime())
    }
    componentDidUpdate(){
        const targetInfo=this.props.location.state.activeVideo
  this.video.current.seekTo(localStorage.getItem(`${targetInfo.title}`))
      
    }
    
    render(){
        const targetInfo=this.props.location.state.activeVideo
        console.log(targetInfo)
        return(
            <div>
                <div className="react-player"><ReactPlayer url={`/assets/videos/${targetInfo.Url}`} controls playing ref={this.video}  width="100%" height="100%"/></div>
                
                <div className="target-info-container">
                {targetInfo.title && <div><span>Title:</span>{targetInfo.title}</div>}  
              {targetInfo.Description && <div><span>Description:</span>{targetInfo.Description}</div>}  
                </div>
              
            </div>
        )
    }
}
export default VideoPlayer;