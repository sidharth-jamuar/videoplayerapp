import React from "react"
import "../css/VideoList.css"
import {connect} from "react-redux"
class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    playVideo=(activeVideo)=>{
        console.log(activeVideo);
        this.props.history.push({pathname:`/video/${activeVideo._id}`,state:{activeVideo}})
    }
    renderList(){
        console.log(this.props.videos)

        const list=this.props.videos
        return Object.keys(list).map(keys=>{
           
            return(
                <div key={list[keys].id}>
                <div className="list-container"  onClick={e=>{this.playVideo(list[keys])}}>
                <div className="image-container"><img src={`/assets/images/${list[keys].image}`} height="100px" width="100px" /></div>
                <div className="details-container">
                <div className="details"><span>Title: </span>{list[keys].title}</div>
                <div className="details"><span>Desc: </span>{list[keys].Description}</div>
                </div>
               
                </div>
               
                </div>
            )
        })
    }
    render(){
  
    if(Object.keys(this.props.videos).length >0){
        return(
            <div>
               {this.renderList()}
               
            </div>
        )
    }
    else{
        return(
            <div>fetching videos</div>
        )
    }
      
    }
}
const mapStateToProps=(state)=>{
    return{
        videos:state.videos
    }
}
export default connect(mapStateToProps)(VideoList);