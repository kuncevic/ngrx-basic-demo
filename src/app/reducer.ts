import * as ACTION from './constants';

export const counter = (state = 0, action) => {
    switch (action.type) {
        case ACTION.INCREMENT:
            return state + 1;
            
        case ACTION.DECREMENT:
            return state - 1;
            
        default:
            return state;
    }
};