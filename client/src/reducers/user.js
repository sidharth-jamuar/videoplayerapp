import { actionType } from "../constants/actionType";

const userInitialState={};

const userReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case actionType.user.LOGIN_USER:
        return {...state,user:action.payload}
        case actionType.user.LOGOUT_USER:{
            return {...state,user:action.payload}
        }
        case actionType.user.UPDATE_USER:{
            return {...state,user:action.payload}
        }
        default:
        return state;
    }
}

export default userReducer;