import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../actions/review_actions";

const ReviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case RECEIVE_REVIEWS:
            // return action.businesses;
            return Object.assign({}, action.reviews);
        // console.log(action.businesses)
        // case 
        default:
            return oldState;
    }
};

export default ReviewReducer