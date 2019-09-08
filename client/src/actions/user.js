import axios from "axios"
export const loginUser=(data={},history)=>{
    
return async dispatch=>{
    const res=await axios.post("/api/login",data)
    dispatch({
        type:"LOGIN_USER",
        payload:res.data.username
    })
   if(res.data.token){
       localStorage.setItem("user",res.data.username)
       history.push("/")
       localStorage.setItem("token",res.data.token)
       dispatch({type:"IS_AUTH",payload:true})
   }
}
}

export const isAuthenticated=(isAuth)=>{
    console.log(isAuth)
    if(isAuth){
        var auth=true
    }
    else{
        var auth=false;
    }
    return{
        type:"IS_AUTH",
        payload:auth
    }
}
export const loginGoogleUser=(data={},history)=>{
       return  dispatch=>{
console.log(data)
   dispatch({
        type:"Login_USER",
        payload:data.username
    })
    if(data.token){
        localStorage.setItem("user",data.username)
        history.push("/")
        localStorage.setItem("token",data.token)
        dispatch({type:"IS_AUTH",payload:true})
    }
       }}