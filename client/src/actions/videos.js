import axios from "axios";
export const uploadVideo=(fd)=>{
    console.log(fd)
    return async dispatch =>{
        // const res=await axios.post("/api/uploadVideo",fd, {
        //     headers: {
        //      'accept': 'application/json',
        //      'Accept-Language': 'en-US,en;q=0.8',
        //      'Content-Type': `multipart/form-data`,
        //     }
        //    })
           const res = await axios({
            method: 'post',
            url: "/api/uploadVideo",
            data: fd,
            headers: {
            'content-type': `multipart/form-data; boundary=${fd._boundary}`,
            },
        });
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
export const fetchLatestVideos=()=>{
    return async dispatch=>{
        const res=await axios.get("/api/latestVideos")
        dispatch({
            type:"FETCH_VIDEOS",
            payload:res.data
        })
    }
}
export const fetchMostViewedVideos=(isMobile)=>{
    return async dispatch=>{
        const res=await axios.get(`/api/mostViewedVideos?isMobile=${isMobile}`);
        dispatch({
            type:"FETCH_MOST_VIEWED",
            payload:res.data
        })
    }
}
export const fetchMyVideos=(user)=>{
    return async dispatch =>{
        const res=await axios.get(`/api/user/videolist?user=${user}`)
        console.log(res.data)
        dispatch({
            type:"FETCH_OWN_VIDEOS",
            payload:res.data
        })
    }
    
}
export const incrementView=id=>{
    return async dispatch=>{
        const res=await axios.get(`/api/incrementView?id=${id}`)
        console.log(res.data)
    }
}