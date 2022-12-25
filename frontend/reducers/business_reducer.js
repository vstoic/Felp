import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../Actions/BusinessActions";

const BusinessesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business;
            return nextState;
        case RECEIVE_BUSINESSES:
            // return action.businesses;
            return Object.assign({}, action.businesses);
            // console.log(action.businesses)
        default:
            return oldState;
    }
}

export default BusinessesReducer