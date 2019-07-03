const searchInitialState="";

const searchReducer=(state=searchInitialState,action)=>{
    switch(actiontype){
        case "SEARCH_VIDEO":{
            return {...state,...action.payload}
        }
        default:
        return state;
    }
}
export default searchReducer;