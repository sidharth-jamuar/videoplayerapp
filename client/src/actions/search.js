import axios from "axios";
export const searchVideo=(keyword,history)=>{
    console.log(keyword)
    return async dispatch =>{
        const res=await axios.get(`/api/searchVideo?keyword=${keyword}`)
        if(res.data){
        dispatch({
            type:"SEARCH_VIDEOS",
            payload:res.data
        })
        history.push("/search")
    }
    else{
        dispatch({
            type:"ERROR_VIDEO"
        })
    }
    }
}