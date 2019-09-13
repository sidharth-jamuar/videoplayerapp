import axios from "axios"
export const loginUser=(data={},history)=>{
    
return async dispatch=>{
    const res=await axios.post("/api/login",data)
    dispatch({
        type:"LOGIN_USER",
        payload:res.data
    })
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
    console.log(isAuth)
    if(isAuth){
        var auth=true
    }
    else{
        var auth=false;
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        dispatch({
            type:"LOGOUT_USER",
            payload:undefined
        })
    }
    dispatch({
        type:"IS_AUTH",
        payload:auth
    })
    if(history!==null){
    history.push("/")
    }
}
}
export const loginGoogleUser=(data={},history)=>{
    console.log(data)
   var obj= JSON.stringify(data)
       return dispatch=>{
   dispatch({
        type:"LOGIN_USER",  
        payload:data
    })
    if(data.token){
        localStorage.setItem("user",obj)
        history.push("/")
        localStorage.setItem("token",data.token)
        dispatch({type:"IS_AUTH",payload:true})
    }

 }}
 export const sendVideoRequest=(uploader,requester,title,id)=>{
    return async dispatch=>{
        const res=await axios.get(`http://localhost:3004/api/requestAccess?uploader=${uploader}&requester=${requester}&title=${title}&id=${id}`)
        console.log(res.data)
    }
 }
 export const approveRequest= (name,id,uploader)=>{return async dispatch=> {
    const res=await  axios.post(`/api/approveRequest?name=${name}&id=${id}&uploader=${uploader}`)
    console.log(res.data)
    dispatch({type:"UPDATE_USER",
                payload:res.data})
  }
}
 export const declineRequest=(name,uploader)=>{
 return async dispatch=>{
   const res=await axios.post(`/api/declineRequest?name=${name}&uploader=${uploader}`)
   console.log(res.data)
   dispatch({
       type:"UPDATE_USER",
       payload:res.data
   })
}
 }