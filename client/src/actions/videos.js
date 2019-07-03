import axios from "axios";

const videoList=()=>{
    return async dispatch=>{
    const res=  axios.get("/api/videoList")
    dispatch({
        type:"FETCH_VIDEOS",
        payload:res.data
    })
    }
}