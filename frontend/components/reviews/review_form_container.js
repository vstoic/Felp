import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { fetchReviews, createReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";

const mSTP = (state) => {
    // console.log(state.entities)
    return {
        business: state.entities.businesses,
        reviews: state.entities.reviews
    };
};

const mDTP = dispatch => ({
        fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);