import React from "react";

export default function(ComposedComponent){
    class PlayVideo extends React.Component{
        constructor(props){
            super(props)
        }
        playVideo=(activeVideo)=>{
            console.log(activeVideo);
            this.props.history.push({pathname:`/video/${activeVideo._id}`,state:{activeVideo}})
        }
        render(){
            return <ComposedComponent {...this.props} playVideo={this.playVideo} />
        }
    }
    return PlayVideo;
}