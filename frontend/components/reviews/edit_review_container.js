import { connect } from "react-redux";
import EditReview from "./edit_review";
import { fetchReview, fetchReviews, editReview , clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mSTP = (state, ownProps) => {
    // console.log(state.entities.reviews[ownProps.match.params.reviewId])
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId],
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
        // business: state.entities.businesses[ownProps.match.params.businessId],
    };
};

const mDTP = dispatch => ({
    // fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId)),
    fetchReviews: businessId => dispatch(fetchReviews(businessId)),
    editReview: (reviewId, businessId) => dispatch(editReview(reviewId, businessId)),
    clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(mSTP, mDTP)(EditReview);