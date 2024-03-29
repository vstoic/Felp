import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearErrors } from "../../Actions/sessionActions";
import SignUp from "./signupForm";
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
