export const INCREASE_FOLLOWERS = 'INCREASE_FOLLOWERS';
export const DECREASE_FOLLOWERS = 'DECREASE_FOLLOWERS';
export const INCREASE_FOLLOWING = 'INCREASE_FOLLOWING';
export const DECREASE_FOLLOWING = 'DECREASE_FOLLOWING';


export const increaseFollowers = sum => ({
    type: INCREASE_FOLLOWERS,
    payload: sum
});

export const decreaseFollowers = sum => ({
    type: DECREASE_FOLLOWERS,
    payload: sum
});

export const increaseFollowing = sum => ({
    type: INCREASE_FOLLOWING,
    payload: sum
});

export const decreaseFollowing = sum => ({
    type: DECREASE_FOLLOWING,
    payload: sum
});
