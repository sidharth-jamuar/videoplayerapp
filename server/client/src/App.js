import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from "./components/VideoPlayer.js"
import VideoList from "./components/VideoList"
import NavBar from "./components/NavBar"
import axios from "axios"
class App extends Component {
  constructor(props){
    super(props)
    
    this.state={
      list:{},
      urltarget:"/assets/videos",
      targetInfo:{},
      search:""
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
  render() {
    const filteredList=Object.keys(this.state.list).filter(key=>this.state.list[key].title.toLowerCase().split(" ").join("").includes(this.state.search.toLowerCase().split(" ").join("")))
    const mainFilteredList={};
    for(let key of filteredList){
      
      mainFilteredList[key]=this.state.list[key]
    }
    
    if(!Object.keys(this.state.list)){
      return(
        <div>...Loading</div>
      )
    }
    else{
    return (
      <div className="App">
        <div><NavBar searchVideo={this.searchVideo}/></div>
        <div className="flex-container">
        <div className="video-container"><VideoPlayer targetInfo={this.state.targetInfo} urltarget={this.state.urltarget}/></div>
        <div className="video-list"><VideoList list={mainFilteredList} playVideo={this.playVideo}/></div></div>
      
      </div>
    );
  }
}
}

export default App;
