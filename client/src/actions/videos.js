import axios from "axios";
export const uploadVideo=(fd)=>{
    console.log(fd)
    return async dispatch =>{
        const res=await axios.post("/api/uploadVideo",fd)
        console.log(res.data)
        dispatch({
            type:"UPLOAD_VIDEO",
            payload:res.data
        })

    }
}
export const videoList=()=>{
    return async dispatch=>{
    const res= await axios.get("/api/videoList")
    dispatch({
        type:"FETCH_VIDEOS",
        payload:res.data
    })
    }
}
export const fetchMyVideos=(user)=>{
    return async dispatch =>{
        const res=await axios.get(`/api/user/videolist?user=${user}`)
        dispatch({
            type:"FETCH_OWN_VIDEOS",
            payload:res.data
        })
    }
    
}