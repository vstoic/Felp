import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import {fetchReviews} from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import BusinessShowIndex from './business_show_index';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.business.id],
    // formType: "other_pages",
    currentUser: state.entities.users[state.session.id]
})
const mapDispatchToProps = dispatch => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    // fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShowIndex));