import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Star from "./star";
import { fetchReviews } from "../../actions/review_actions";

const mSTP = (state) => {
    console.log(state.entities);
    return {
        // businessId: state.entities.business.id,
        reviews: Object.values(state.entities.reviews),
    };
}
const mDTP = dispatch => ({
    fetchReviews: businessId => dispatch(fetchReviews(businessId)),
});

export default withRouter(connect(mSTP, mDTP)(Star));