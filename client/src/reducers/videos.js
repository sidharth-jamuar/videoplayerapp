import { actionType } from "../constants/actionType";

const videoReducerInitialState={};

const videoReducer=(state=videoReducerInitialState,action)=>{
    switch(action.type){
        case actionType.video.FETCH_VIDEOS:
        return {...state,latestVideos:action.payload}
        case actionType.video.UPLOAD_VIDEO:
        return {...state,userVideos:{...state.userVideos,...action.payload}}
        case actionType.video.FETCH_OWN_VIDEOS:
        return {...state,userVideos:action.payload}
        case actionType.video.FETCH_MOST_VIEWED:
            return {...state,mostViewed:action.payload}
        case actionType.video.SEARCH_VIDEOS:
        if(state.searchResults===undefined) {
            state.searchResults=[];
        }
        return {...state,searchResults:state.searchResults.concat(action.payload)}
        case actionType.search.CLEAR_SEARCH_LIST:
        return {...state,searchResults:undefined}
        default:
        return state;
    }
}
export default videoReducer;