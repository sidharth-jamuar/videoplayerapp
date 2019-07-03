import axios from "axios";
export const searchVideo=(keyword)=>{
    return async dispatch =>{
        const res=await axios.get(`/api/searchVideo?keyword=${keyword}`)
        if(res.data){
        dispatch({
            type:"FETCH_VIDEOS",
            payload:res.data
        })
    }
    else{
        dispatch({
            type:"ERROR_VIDEO"
        })
    }
    }
}