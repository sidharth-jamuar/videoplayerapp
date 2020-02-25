import axios from "axios";
import { receiveAction } from "./index";
import { actionType } from "../constants/actionType";
export const uploadVideo=(fd)=>{
    console.log(fd)
    return async dispatch =>{
           const res = await axios({
            method: 'post',
            url: "http://localhost:3004/api/uploadVideo",
            data: fd,
            headers: {
            'content-type': `multipart/form-data; boundary=${fd._boundary}`,
            },
        });
        dispatch(receiveAction(actionType.video.UPLOAD_VIDEO,res.data))

    }
}
export const videoList=()=>{
    return async dispatch=>{
    const res= await axios.get("http://localhost:3004/api/videoList")
    dispatch(receiveAction(actionType.video.FETCH_VIDEOS,res.data))
    }
}
export const fetchLatestVideos= () => {
    return async dispatch=> {
        const res=await axios.get("http://localhost:3004/api/latestVideos")
        dispatch(receiveAction(actionType.video.FETCH_VIDEOS,res.data))
    }
}
export const fetchMostViewedVideos= (isMobile) =>{
    return async dispatch=>{
        const res=await axios.get(`http://localhost:3004/api/mostViewedVideos?isMobile=${isMobile}`);
        dispatch(receiveAction(actionType.video.FETCH_MOST_VIEWED,res.data))
    }
}
export const fetchMyVideos= (user) =>{
    return async dispatch =>{
        const res=await axios.get(`http://localhost:3004/api/user/videolist?user=${user}`)
        dispatch(receiveAction(actionType.video.FETCH_OWN_VIDEOS,res.data))
    }
    
}
export const incrementView =id =>{
    return async () => {
        const res=await axios.get(`http://localhost:3004/api/incrementView?id=${id}`)
       
    }
}