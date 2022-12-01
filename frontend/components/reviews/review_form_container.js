import { connect } from "react-redux";
import Review from "./review_container";
// import { } from "../../actions/review_action";

const mSTP = (state) => {
    return {
        // console.log(state)
        // user: state.entities.users[ownProps.match.params.userId],
        // review: state.entities.reviews
        //
    };
}
const mDTP = dispatch => {
    return {
        // editReview: review => dispatch(editReview(review)),
        // deleteReview: reviewId => dispatch(deleteReview(reviewId))
    };
}
export default connect(mSTP, mDTP)(ReviewForm);