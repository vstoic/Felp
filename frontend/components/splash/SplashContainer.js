import React from "react";
import { connect } from "react-redux";
import Splash from "./Splash";
import {
  logout,
  receiveCurrentUser,
  clearErrors,
} from "../../Actions/SessionActions";
import { fetchBusinesses, fetchBusiness } from "../../Actions/BusinessActions";

const mapStateToProps = (state) => ({
  formType: "splash",
  currentUser: state.entities.users[state.session.id],
  businesses: Object.values(state.entities.businesses),
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
