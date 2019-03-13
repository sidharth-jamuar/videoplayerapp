const authState={
    auth:false
}
const authReducer=(state=authState,action)=>{
    switch(action.type){
        case "IS_AUTH":
        return {...state,auth:action.payload}
    
    default:
    return state;
    }
}
export default authReducer