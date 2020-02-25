import axios from "axios";
import { receiveAction } from ".";
import { actionType } from "../constants/actionType";

export const searchVideo=(keyword,history)=>{
    return async dispatch =>{
        try {
        let res;
        res=await axios.get(`http://localhost:3004/api/searchVideo?keyword=${keyword}`);
        dispatch(receiveAction(actionType.search.SEARCH_VIDEOS,res.data))
        history.push("/search")
}
        catch (err){
        dispatch(receiveAction(actionType.search.ERROR_VIDEO))
    }
    }
}

export const clearSearchList =() => dispatch => {
    dispatch(receiveAction(actionType.search.CLEAR_SEARCH_LIST,undefined))
}
export  const infinite=(keyword,pagination) => {
    return async dispatch => {
    let res;
    if(Object.keys(pagination).length >0){
        res=await axios.get(`http://localhost:3004/api/searchVideo?keyword=${keyword}&start=${pagination.start}&end=${pagination.end}`);
        console.log(res.data)
        dispatch(receiveAction(actionType.search.SEARCH_VIDEOS,res.data))
       }
   
}
}
