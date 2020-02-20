import React from "react"
import {connect} from "react-redux"
import { fetchMostViewedVideos } from "../actions/videos";
import {withRouter} from "react-router-dom"
import "../css/Slider.css"
import spinner from "../css/gifs/spinner.gif"
import playVideo from "../hoc/playVideo"
import screenIsMobile from "../hoc/isMobile"
class Slider extends React.Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount(){
      console.log(this.props.sliderType)
      if(this.props.sliderType==="mostViewed") {
        this.props.fetchMostViewedVideos(this.props.isMobile?3:5)
      }
    
    }
    renderSlider(){
      const array=[1,2,3]
     return array.map((item,j)=>{
      return ( <section id={`section${item}`}>
       
      {item===1 &&<a href="#section3">‹</a>}
      {item===2 &&<a href="#section1">‹</a>}
      {item===3 &&<a href="#section2">‹</a>}
       {this.props.videos.map((video,i)=>{
         return(
           <React.Fragment key={i}>
               <div className="item" onClick={e=>this.props.playVideo(video)}>
                 <div className="slider-container"> <img src={`/assets/images/${video.image}`} width="100%" height="160px"/>
                 <div className="slider-info">
                 <div className="slider-title">Title:{video.title}</div>
                 <div className="slider-description">Desc:{video.Description.substr(0,12)}</div>
                 </div>
                 </div>
                
               </div>
           </React.Fragment>
         )
       })}
     
         {item===1 && <a href="#section2">›</a>}
         {item===2 && <a href="#section3">›</a>}
         {item===3 && <a href="#section1">›</a>}
       </section>
      )
      })
    }
    render(){

      if(this.props.videos&& this.props.videos.length >0){
        return(
            <div className="slider-container">
             <div className="wrapper">
           {this.renderSlider()}
    </div>
</div>

        )
      }
      return <div className="loader loader-slider"><img src={spinner} style={{width:"40px",height:"40px"}}/></div>
    }
}
const mapStateToProps=(state,ownProps)=>{
  console.log(ownProps)
    return{
        videos:state.videos[ownProps.sliderType]
    }
}
    export default withRouter(connect(mapStateToProps,{fetchMostViewedVideos})(screenIsMobile((playVideo(Slider)))));