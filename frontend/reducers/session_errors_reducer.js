import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_action';

const SessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // nextState = action.errors //.responseJSON;
            // return nextState;
            return oldState
        case RECEIVE_CURRENT_USER:
            nextState = [];
            return nextState;
        default:
            return oldState;
    }
};

export default SessionErrorsReducer;