import React from "react";
import VideoPlayer from "./VideoPlayer";
import Comments from "./Comments";

const VideoPlayerView=(props)=> {
    return (
        <div>
            <VideoPlayer {...props}/>
            <Comments />
        </div>
    )
}
export default VideoPlayerView;