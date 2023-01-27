import { connect } from "react-redux";
import { logout } from "../../actions/sessionAction";
import Nav from "./Nav";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
