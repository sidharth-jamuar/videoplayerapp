import React from "react"
import "../css/VideoList.css"
import {connect} from "react-redux"
import spinner from "../css/gifs/spinner.gif"
import {infinite,clearSearchList} from "../actions/search"
class VideoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false
        }
    }
   
    hideLoader = () => {
        this.setState({isLoading:false})
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            if(document.documentElement.offsetHeight===window.innerHeight + document.documentElement.scrollTop) {
                // this.setState((prevState) =>{return{
                //     isLoading:true
                // }}, () => {
                // this.props.infinite(this.findStartAndEnd(),this.hideLoader);
                // })
                this.props.infinite("",this.findStartAndEnd(),this.hideLoader);
            }

        })
    }
    
    componentWillUnmount() {
        this.props.clearSearchList();
    }
    findStartAndEnd() {
        if(this.props.videos.searchResults) {
        let length=this.props.videos.searchResults.length;
        return {
            start:length,
            end:2
        }
    }
    }
    renderList(){
        const list=this.props.videos.searchResults
        return list.map(keys=>{
           
            return(
                <div key={keys.id}>
                <div className="list-container"  onClick={e=>{this.props.playVideo(keys)}}>
                <div className="list-image-container" style={{width:"20px",height:"100px"}} ><img src={`/assets/images/${keys.image}`}  style={{width:"100%",height:"200px"}}/></div>
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
        console.log(this.state.isLoading,"isloading")
    if(this.props.videos.searchResults && this.props.videos.searchResults.length >0){
        return(
            <React.Fragment>
             <div className="VideoList">
               {this.renderList()} 
            </div>
            {/* {this.state.isLoading && <div className="loader"><img src={spinner} style={{width:"40px",height:"40px"}}/></div>} */}
            </React.Fragment>
           
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
export default connect(mapStateToProps,{infinite,clearSearchList})(VideoList);