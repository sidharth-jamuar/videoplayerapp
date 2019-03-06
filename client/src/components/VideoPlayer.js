import React,{Component} from "react";
import ReactPlayer from "react-player"
import "../css/VideoPlayer.css"
class VideoPlayer extends Component{
    constructor(props){
        super(props)
       this.video=React.createRef();
       
    }
    componentWillUpdate(){
        localStorage.setItem(`${this.props.urltarget}`,this.video.current.getCurrentTime())
        
       
    }
    componentDidUpdate(){
      this.video.current.seekTo(localStorage.getItem(`${this.props.urltarget}`))
      
    }
    
    render(){
        const {targetInfo}=this.props
        return(
            <div>
                <div className="react-player"><ReactPlayer url={this.props.urltarget} controls playing ref={this.video}  width="100%" height="100%"/></div>
                
                <div className="target-info-container">
                {targetInfo.title && <div><span>Title:</span>{targetInfo.title}</div>}  
              {targetInfo.Description && <div><span>Description:</span>{targetInfo.Description}</div>}  
                </div>
              
            </div>
        )
    }
}
export default VideoPlayer;