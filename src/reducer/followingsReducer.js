import {INCREASE_FOLLOWING, DECREASE_FOLLOWING} from "../actions/userActions.js";

const initialState = { following: 10 };

export const followingReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_FOLLOWING:
            return {...state, following: state.following + action.payload};
        case DECREASE_FOLLOWING:
            return {...state, following: state.following === 0 ? state.following : state.following - action.payload};
        default:
            return state;
    }
}