import { connect } from 'react-redux';
import { receiveUser, logout, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import BusinessIndex from './business_index';

const mapStateToProps = (state) => ({
    // businesses: Object.values(state.entities.businesses),
    formType: "other_pages",
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));

//search Business
//what does withRouter do?