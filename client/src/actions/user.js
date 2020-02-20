import axios from "axios"
import { receiveAction } from "."
import { actionType } from "../constants/actionType"
export const loginUser=(data={},history)=>{
    
return async dispatch=>{
    const res=await axios.post("http://localhost:3004/api/login",data)
    dispatch(receiveAction(actionType.user.LOGIN_USER,res.data))
   if(res.data.token){
       localStorage.setItem("user",JSON.stringify(res.data))
       history.push("/")
       localStorage.setItem("token",res.data.token)
       dispatch({type:"IS_AUTH",payload:true})
   }
}
}

export const isAuthenticated=(isAuth,history=null)=>{
    return dispatch=>{
    if(isAuth){
        var auth=true
    }
    else{
        var auth=false;
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        dispatch(receiveAction(actionType.user.LOGOUT_USER,undefined))
    }
    dispatch(receiveAction(actionType.user.IS_AUTH,auth))
    if(history!==null){
    history.push("/")
    }
}
}
export const loginGoogleUser=(data={},history)=>{
   var obj= JSON.stringify(data)
       return dispatch=>{
   dispatch(receiveAction(actionType.user.LOGIN_USER,data))
    if(data.token){
        localStorage.setItem("user",obj)
        history.push("/")
        localStorage.setItem("token",data.token)
        dispatch(receiveAction(actionType.user.IS_AUTH,true))
    }

 }}
 export const sendVideoRequest=(uploader,requester,title,id,history)=>{
    return async ()=>{
        const res=await axios.get(`http://localhost:3004/api/requestAccess?uploader=${uploader}&requester=${requester}&title=${title}&id=${id}`)
        history.push("/")
    }
 }
 export const approveRequest= (name,id,uploader)=>{return async dispatch=> {
    const res=await  axios.post(`http://localhost:3004/api/approveRequest?name=${name}&id=${id}&uploader=${uploader}`)
    dispatch(receiveAction(actionType.user.UPDATE_USER,res.data))
  }
}
 export const declineRequest=(name,uploader)=>{
 return async dispatch=>{
   const res=await axios.post(`http://localhost:3004/api/declineRequest?name=${name}&uploader=${uploader}`)
   console.log(res.data)
   dispatch(receiveAction(actionType.user.UPDATE_USER,res.data))
}
 }