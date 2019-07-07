const videoReducerInitialState={};

const videoReducer=(state=videoReducerInitialState,action)=>{
    switch(action.type){
        case "FETCH_VIDEOS":
        return {...state,...action.payload}
        case "UPLOAD_VIDEOS":
        return {...state,...action.payload}
        case "FETCH_OWN_VIDEOS":
        return {...state,...action.payload}
        default:
        return state;
    }
}
export default videoReducer;