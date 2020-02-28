import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from "./components/VideoPlayerView/VideoPlayer.js/index.js"
import VideoList from "./components/VideoList"
import axios from "axios"
import {connect} from "react-redux"
class App extends Component {
  constructor(props){
    super(props)
    
    this.state={
      list:{},
      urltarget:"/assets/videos",
      targetInfo:{}
  }
  axios.get("/api/videolist").then((res)=>{{this.setState({list:res.data})}})
  }
  playVideo=(urltarget)=>{
    const targetInfo={title:urltarget.title,
    Description:urltarget.Description}
    this.setState({urltarget:"/assets/videos/"+urltarget.Url,targetInfo:targetInfo})
  }
  searchVideo=(search)=>{
    this.setState({search})
  }
  componentDidMount(){
    if(Object.keys(this.props.user).length!==0){
      localStorage.setItem("token",this.props.user.user.token)
    }

  }
  render() {
   console.log(this.state)
    //const filteredList=Object.keys(this.state.list).filter(key=>this.state.list[key].title.toLowerCase().split(" ").join("").includes(this.state.search.toLowerCase().split(" ").join("")))
    if(!Object.keys(this.state.list)){
      return(
        <div>...Loading</div>
      )
    }
    else{
    return (
      <div className="App">
        
        <div className="flex-container">
        <div className="video-container"><VideoPlayer targetInfo={this.state.targetInfo} urltarget={this.state.urltarget}/></div>
        <div className="video-list"><VideoList playVideo={this.playVideo}/></div>
        </div>
      </div>
    );
  }
}
}
const mapStateToProps=state=>{
  return {
    user:state.users,
    isAuth:state.isAuth
  }
}
export default connect(mapStateToProps)(App);
