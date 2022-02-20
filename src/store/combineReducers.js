import { combineReducers } from "redux";
import { usersReducer } from "./reducer";



export default combineReducers({
    users:usersReducer
})