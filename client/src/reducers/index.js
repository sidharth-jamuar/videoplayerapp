import {combineReducers} from "redux";
import userReducer from "./user"
import authReducer from "./auth";
import videoReducer from "./videos"
export default combineReducers({
 isAuth:authReducer,
 users:userReducer,
 videos:videoReducer
})