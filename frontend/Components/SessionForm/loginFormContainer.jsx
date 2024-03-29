import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../Actions/sessionActions';
import Login from './loginForm';

// const mapStateToProps = (state) => {
//     return {
//         errors: state.errors.session,
//         formType: 'login',
//         // navLink: <Link to="/signup">sign up instead</Link>,
//     };
// };
const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};
const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);