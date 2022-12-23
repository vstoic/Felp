import { connect } from 'react-redux';
import {fetchReviews} from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import BusinessShowIndex from './business_show_index';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.business.id],
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews)
})
const mapDispatchToProps = dispatch => ({
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShowIndex));