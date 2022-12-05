import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Review from "./review";
import { fetchReviews, editReview, deleteReview } from "../../actions/review_actions";

const mSTP = (state) => {
    return {
        // user: state.entities.users[ownProps.match.params.userId],
        // business: state.entities.business,
        // reviews: Object.values(state.entities.reviews),
    };
}
const mDTP = dispatch => ({
        fetchReviews: businessId => dispatch(fetchReviews(businessId)),
        editReview: review => dispatch(editReview(review)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        
});
export default withRouter(connect(mSTP, mDTP)(Review));

// is it bad that im not fetching reviews for the business show page. 
// its just fetching reviews using the views from business jbuilder