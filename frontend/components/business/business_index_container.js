import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusiness, fetchBusinesses } from "../../actions/business_actions";
import { clearErrors, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses),
    currentUser: state.entities.users[state.session.id],
    errors: Object.values(state.errors),
    formType: "other_pages"
})

const mapDispatchToProps = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));

