import { FETCH_ADMIN } from '../actions';

export default (state = [], action) => {
    switch (action.type){
        case FETCH_ADMIN:
            return action.payload.data;
        default:
            return state;
    }
};