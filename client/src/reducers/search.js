import { actionType } from "../constants/actionType";

const searchInitialState="";

const searchReducer=(state=searchInitialState,action)=>{
    switch(action.type){
        case actionType.search.SEARCH_VIDEOS:{
            return {...state,...action.payload}
        }
        default:
        return state;
    }
}
export default searchReducer;