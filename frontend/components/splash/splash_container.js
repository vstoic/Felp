import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logout, receiveCurrentUser } from '../../actions/session_action';

const mapStateToProps = (state) => ({
    formType: "splash",
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)