import React from "react"
import {connect} from "react-redux"
import { fetchMostViewedVideos } from "../actions/videos";
import {withRouter} from "react-router-dom"
import "../css/Slider.css"
import {Carousel} from "react-responsive-carousel"
class Slider extends React.Component{
    constructor(props){
        super(props);
      
    }
    componentDidMount(){
        this.props.fetchMostViewedVideos()
    
    }
    renderSlider(){
      const array=[1,2,3]
     return array.map((item,j)=>{
      return ( <section id={`section${item}`}>
       
      {item===1 &&<a href="#section3">‹</a>}
      {item===2 &&<a href="#section1">‹</a>}
      {item===3 &&<a href="#section2">‹</a>}
       {this.props.videos.mostViewed.map((video,i)=>{
         return(
           <React.Fragment key={i}>
               <div className="item">
                 <img src={`/assets/images/${video.image}`} width="60px" height="160px"/>
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
      console.log(this.props.videos)
      if(this.props.videos.mostViewed && this.props.videos.mostViewed.length >0){
        return(
            <div className="slider-container">
             <div className="wrapper">
           {this.renderSlider()}
    </div>
</div>

        )
      }
      return <div>...Loading</div>
    }
}
const mapStateToProps=state=>{
    return{
        videos:state.videos
    }
}
    export default withRouter(connect(mapStateToProps,{fetchMostViewedVideos})(Slider));