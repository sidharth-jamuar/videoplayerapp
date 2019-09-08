import React from "react"
import {connect} from "react-redux"
import { fetchLatestVideos } from "../actions/videos";
import {withRouter} from "react-router-dom"
import "../css/spinner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Carousel.css"
import {Carousel} from "react-responsive-carousel"
class CarouselView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchLatestVideos()
    }
    playVideo=(activeVideo)=>{
        console.log(activeVideo);
        this.props.history.push({pathname:`/video/${activeVideo._id}`,state:{activeVideo}})
    }
    renderCarousel(){
        const videos=this.props.videos.latestVideos;
        const path=`/assets/images`
    
    
        return videos.map((video,i)=>{
            console.log(video["image"])
            return (
            <div className={`item ${i===0?"active":""}`} key={i} onClick={e=>{this.playVideo(video)}}>
          
          <img src={`${path}/${video["image"]}`} alt="Chania" style={{width:"50px",height:"250px"}} />
          <div className="carousel-caption">
            <h3>{video["title"]}</h3>
            <p>{video["Description"]}</p>
          </div>
 
     </div>)
     }
        )        
    
}
    render()
    {
        console.log(this.props.videos.latestVideos)
        
        if(this.props.videos.latestVideos && this.props.videos.latestVideos.length > 0){
        return(
            <div className="carousel-container">
               
               <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 
  <div className="carousel-inner">
               {this.renderCarousel()}
           </div>
           <a className="left carousel-control" href="#myCarousel" data-slide="prev">
           <span className="glyphicon glyphicon-chevron-left"></span>
           <span className="sr-only">Previous</span>
         </a>
         <a className="right carousel-control" href="#myCarousel" data-slide="next">
           <span className="glyphicon glyphicon-chevron-right"></span>
           <span className="sr-only">Next</span>
         </a>
         </div>
            </div>
        )
        }
        return <div className="loader"></div>
        
    }
}
const mapStateToProps=state=>{
    return{
        videos:state.videos
    }
}
export default withRouter(connect(mapStateToProps,{fetchLatestVideos})(CarouselView));