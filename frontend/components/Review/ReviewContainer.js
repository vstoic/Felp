import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Review from "./Review";
import { fetchReviews, updateReview, deleteReview } from "../../Actions/ReviewActions";

const mSTP = (state) => {
    return {
        // user: state.entities.users[ownProps.match.params.userId],
        // business: state.entities.business,
        // reviews: Object.values(state.entities.reviews),
    };
}
const mDTP = dispatch => ({
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        // updateReview: review => dispatch(updateReview(review)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        
});
export default withRouter(connect(mSTP, mDTP)(Review));