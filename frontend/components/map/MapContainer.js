import { connect } from 'react-redux';
import map from './Map';
import { fetchBusiness, fetchBusinesses } from "../../Actions/BusinessActions";
import { clearErrors, logout } from '../../Actions/SessionActions';
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

