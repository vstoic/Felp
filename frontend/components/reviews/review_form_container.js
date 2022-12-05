import { connect } from "react-redux";
import Review from "./review_container";
import { fetchReviews, createReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mSTP = (state) => {
    return {
        // business: state.entities.business,
        // review: state.entities.review
    };
};

const mDTP = dispatch => ({
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        createReview: review => dispatch(createReview(review))
});
export default connect(mSTP, mDTP)(ReviewForm);