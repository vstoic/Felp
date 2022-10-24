import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/business_actions";

const BusinessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            nextState[action.business.business.id] = action.business.business;
            return nextState;
        case RECEIVE_BUSINESSES:
            // return action.businesses;
            return Object.assign({}, action.businesses.businesses);
        default:
            return oldState;
    }
}

export default BusinessesReducer