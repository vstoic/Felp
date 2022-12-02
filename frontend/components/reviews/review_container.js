import { connect } from "react-redux";
import Review from "./review_container";
import { fetchReviews, editReview, deleteReview } from "../../actions/review_actions";

const mSTP = (state) => {
    return {
        // user: state.entities.users[ownProps.match.params.userId],
        // business: state.entities.business,
        review: state.entities.reviews
        //
    };
}
const mDTP = (dispatch) => {
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        editReview: review => dispatch(editReview(review)),
        // deleteReview: reviewId => dispatch(deleteReview(reviewId))
    };
}
export default connect(mSTP, mDTP)(Review);