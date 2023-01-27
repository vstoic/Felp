import { RECEIVE_USERS, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER 
} from "../Actions/sessionActions";

const nullUser = Object.freeze({id: null
});
const SessionReducer = (oldState = nullUser, action) => {
    Object.freeze(oldState);
    // const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.user.id });
        case LOGOUT_CURRENT_USER:
            return nullUser;
        default:
            return oldState;
    }
};

export default SessionReducer;