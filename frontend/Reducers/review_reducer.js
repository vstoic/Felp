import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from "../Actions/reviewActions";

const ReviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews);
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return oldState;
    }
};
export default ReviewReducer;