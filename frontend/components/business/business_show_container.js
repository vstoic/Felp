import { connect } from 'react-redux';
import { receiveUser, logout, receiveErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    formType: "other_pages",
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));

// needs fetchBusiness and search Business

// business reducer
//what does withRouter do?