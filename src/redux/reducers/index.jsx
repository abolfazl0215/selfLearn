import { combineReducers } from "redux";
import { courseReducer } from "./Course";
import { coursesReducer } from './Courses';
import { userReducer } from './User';
import { loadingBarReducer } from "react-redux-loading-bar";

export const reducers=combineReducers({
    courses:coursesReducer,
    course:courseReducer,
    user:userReducer,
    loadingBar:loadingBarReducer
})