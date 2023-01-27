import { RECEIVE_CURRENT_USER } from "../Actions/sessionActions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return oldState;
    }
};

export default UsersReducer;