const videoReducerInitialState={};

const videoReducer=(state=videoReducerInitialState,action)=>{
    switch(action.type){
        case "FETCH_VIDEOS":
        return {...state,latestVideos:action.payload}
        case "UPLOAD_VIDEOS":
        return {...state,userVideos:{...state.userVideos,...action.payload}}
        case "FETCH_OWN_VIDEOS":
        return {...state,userVideos:action.payload}
        case "FETCH_MOST_VIEWED":
            return {...state,mostViewed:action.payload}
        case "SEARCH_VIDEOS":
        return {...state,searchResults:action.payload}
        default:
        return state;
    }
}
export default videoReducer;