import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Star from "./star";
import { fetchReviews } from "../../Actions/reviewActions";

const mSTP = state => {
    return {
        reviews: Object.values(state.entities.reviews)
    };
}
const mDTP = dispatch => {
    return {
        fetchReviews: businessId => dispatch(fetchReviews(businessId))
    };
};

export default connect(mSTP, mDTP)(Star);