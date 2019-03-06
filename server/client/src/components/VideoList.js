import React from "react"
import "../css/VideoList.css"

class VideoList extends React.Component{
    constructor(props){
        super(props);
       
    }
    renderList(){
        const {list}=this.props
        return Object.keys(this.props.list).map(keys=>{
           
            return(
                <div key={list[keys].id}>
                <div className="list-container"  onClick={e=>{this.props.playVideo(list[keys])}}>
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
    
        return(
            <div>
               {this.renderList()}
            </div>
        )
    }
}
export default VideoList;