import {rootReducer} from "../reducer/rootReducer.js";
import {legacy_createStore as createStore} from "redux";



export const store = createStore(rootReducer);