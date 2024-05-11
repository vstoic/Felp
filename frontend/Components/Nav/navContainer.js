import { connect } from 'react-redux';
import { logout, receiveCurrentUser } from '../../Actions/sessionActions';
import Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
