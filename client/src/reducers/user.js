const userInitialState={};

const userReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case "LOGIN_USER":
        return {...state,user:action.payload}
        default:
        return state;
    }
}
export default userReducer;