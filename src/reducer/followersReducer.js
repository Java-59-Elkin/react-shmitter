import {INCREASE_FOLLOWERS, DECREASE_FOLLOWERS} from "../actions/userActions.js";

const initialState = { followers: 10 };

export const followersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_FOLLOWERS:
            return {...state, followers: state.followers + action.payload};
        case DECREASE_FOLLOWERS:
            return {...state, followers: state.followers === 0 ? state.followers : state.followers - action.payload};
        default:
            return state;
    }
}