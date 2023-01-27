import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { fetchBusiness, fetchBusinesses} from "../../actions/businessActions";
import { fetchReviews } from "../../actions/reviewActions";
import { withRouter } from 'react-router-dom';
import BusinessShow from './businessShow';


const mapStateToProps = (state, ownProps) => (
    {
    business: state.entities.businesses[ownProps.match.params.businessId],
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],

});

const mapDispatchToProps = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchReviews: businessId => dispatch(fetchReviews(businessId)),
    logout: () => dispatch(logout())
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));

