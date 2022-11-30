import { connect } from "react-redux";
import Review from "./review_container";
import { editReview, deleteReview } from "../../actions/review_actions";

const mSTP = (state) => {
    return {
        // console.log(state)
        // user: state.entities.users[ownProps.match.params.userId],
        review: state.entities.reviews
        //
    };
}
const mDTP = dispatch => {
    return {
        editReview: review => dispatch(editReview(review)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    };
}
export default connect(mSTP, mDTP)(Review);