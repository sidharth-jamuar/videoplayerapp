import {combineReducers} from "redux";
import userReducer from "./user"
import authReducer from "./auth";
export default combineReducers({
 isAuth:authReducer,
 users:userReducer
})