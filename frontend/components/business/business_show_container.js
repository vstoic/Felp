import { connect } from 'react-redux';
import { receiveUser, logout, receiveErrors } from '../../actions/session_action';
import Business from './business_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Business));