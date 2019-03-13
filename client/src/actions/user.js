import axios from "axios"
export const loginUser=(data={},history)=>{
    
return async dispatch=>{
    const res=await axios.post("/api/login",data)
    dispatch({
        type:"LOGIN_USER",
        payload:res.data
    })
   if(res.data.token){
       history.push("/")
   }
}
}
export const isAuthenticated=(isAuth)=>{
    
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