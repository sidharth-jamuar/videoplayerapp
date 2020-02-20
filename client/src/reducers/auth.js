import { actionType } from "../constants/actionType";

const authState={
    auth:false
}
const authReducer=(state=authState,action)=>{
    switch(action.type){
        case actionType.user.IS_AUTH:
        return {...state,auth:action.payload}
    
    default:
    return state;
    }
}
export default authReducer