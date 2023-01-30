import { connect } from 'react-redux';
import map from './Map';
// import { fetchBusiness, fetchBusinesses } from "../../Actions/businessActions";
// import { clearErrors, logout } from '../../Actions/sessionActions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    // businesses: Object.values(state.entities.businesses),
    // currentUser: state.entities.users[state.session.id],
    // errors: Object.values(state.errors),
    // formType: "other_pages"
})
const mapDispatchToProps = dispatch => ({
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    // fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    // logout: () => dispatch(logout()),
    // clearErrors: () => dispatch(clearErrors),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(map));

