import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchBusiness, fetchBusinesses} from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';


const mapStateToProps = (state, ownProps) => (
    // console.log(state),
    {
    // business: state.entities.businesses,
    // reviews: Object.values(state.entities.reviews),
    business: state.entities.businesses[ownProps.match.params.businessId],
    // businessId: parseInt(match.params.businessId),
    // business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.entities.users[state.session.id],

})

const mapDispatchToProps = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchReviews: businessId => dispatch(fetchReviews(businessId)),
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));

// business reducer
