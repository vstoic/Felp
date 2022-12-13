import * as ReviewAPIUtil from '../util/review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});
const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});
const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});
const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});
export const clearReviewErrors = () => ({
    type: CLEAR_ERRORS
});

export const fetchReview = reviewId => dispatch => {
    ReviewAPIUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
};
export const fetchReviews = businessId => dispatch => {
    ReviewAPIUtil.fetchReviews(businessId)
        .then(reviews => dispatch(receiveReviews(reviews)))
};
export const createReview = (review, businessId) => dispatch => {
    ReviewAPIUtil.createReview(review, businessId)
        .then(review => {dispatch(receiveReview(review))}, 
        error => dispatch(receiveReviewErrors(error.responseJSON)))
};
export const updateReview = (review) => dispatch => {
    ReviewAPIUtil.updateReview(review)
        .then(review => {dispatch(receiveReview(review))},
        error => dispatch(receiveReviewErrors(error.responseJSON)))
};
// export const deleteReview = (reviewId) => dispatch => {
//     ReviewAPIUtil.deleteReview(reviewId)
//         .then(() => dispatch(removeReview(reviewId)),
//         error => dispatch(receiveReviewErrors(error.responseJSON)))
// };


