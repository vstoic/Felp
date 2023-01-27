import { connect } from "react-redux";
import ReviewForm from "./reviewForm";
import { fetchReviews, createReview, clearReviewErrors } from "../../Actions/reviewActions";
import { fetchBusiness } from "../../Actions/businessActions";

const mSTP = (state, ownProps) => {
    // console.log(state.entities.businesses[ownProps.match.params.businessId])
    return {
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        business: state.entities.businesses[ownProps.match.params.businessId],
        loading: 'true'
    };
};

const mDTP = dispatch => ({
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        createReview: (review, businessId) => dispatch(createReview(review, businessId)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(mSTP, mDTP)(ReviewForm);