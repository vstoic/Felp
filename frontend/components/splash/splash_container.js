import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logout, receiveCurrentUser, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    formType: "splash",
    currentUser: state.entities.users[state.session.id],
    errors: state.errors
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)