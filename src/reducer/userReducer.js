import {ADD, REMOVE} from "../actions/userActions.js";

export const userChanger = (state, action) => {
    switch (action.type) {
        case ADD:
            return {...state, followers: state.followers + action.payload};
        case REMOVE:
            return {...state, followers: state.followers === 0 ? state.followers : state.followers - action.payload};
        default:
            return state;
    }
}