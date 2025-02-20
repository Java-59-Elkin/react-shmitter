import {userReducer} from "../reducer/userReducer.js";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    followers: 10
}

export const store = createStore(userReducer, initialState);