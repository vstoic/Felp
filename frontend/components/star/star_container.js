import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Star from "./star";
import { fetchReviews } from "../../actions/review_actions";

const mSTP = state => {
    return {
        reviews: Object.values(state.entities.reviews)
    };
}

const mDTP = dispatch => ({
    fetchReviews: businessId => dispatch(fetchReviews(businessId))
});

export default withRouter(connect(mSTP, mDTP)(Star));