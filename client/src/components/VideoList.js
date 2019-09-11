import React from "react"
import "../css/VideoList.css"
import {connect} from "react-redux"
import spinner from "../css/gifs/spinner.gif"
class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
   
    renderList(){
        console.log(this.props.videos)

        const list=this.props.videos.searchResults
        return list.map(keys=>{
           
            return(
                <div key={keys.id}>
                <div className="list-container"  onClick={e=>{this.props.playVideo(keys)}}>
                <div className="list-image-container" style={{width:"20px",height:"100px"}} ><img src={`/assets/images/${keys.image}`}  style={{width:"10px",height:"200px"}}/></div>
                <div className="list-details-container">
                <div className="details">Title: {keys.title}</div>
                <div className="details"><span>Desc: </span>{keys.Description}</div>
                </div>
               
                </div>
               
                </div>
            )
        })
    }
    render(){
  
    if(this.props.videos.searchResults && this.props.videos.searchResults.length >0){
        return(
            <div className="VideoList">
               {this.renderList()}
               
            </div>
        )
    }
    else{
        return(
           <div className="loader loader-search"><img src={spinner} width="40px" height="40px"/></div>
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