import { RECEIVE_BUSINESS_ERRORS, CLEAR_ERRORS } from "../actions/businessActions";

const BusinessErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_BUSINESS_ERRORS:
            nextState = action.errors.responseJSON;
            return nextState;
        case CLEAR_ERRORS:
            return [];
        default:
            return oldState;
    }
}
export default BusinessErrorsReducer