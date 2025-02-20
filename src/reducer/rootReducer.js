import { combineReducers } from "redux";
import { followersReducer } from "./followersReducer";
import { followingReducer } from "./followingsReducer";

export const rootReducer = combineReducers({
    followers: followersReducer,
    following: followingReducer
});