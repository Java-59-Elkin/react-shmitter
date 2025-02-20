export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const add = sum => ({
    type: ADD,
    payload: sum
});

export const remove = sum => ({
    type: REMOVE,
    payload: sum
});