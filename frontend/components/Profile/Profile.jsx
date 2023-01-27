import React from "react";
import Nav from "../nav/nav";
function Profile(props) {
  return (
    <div className="profile-container">
      <Nav currentUser={this.props.currentUser} logout={this.props.logout} />
      <div className="profile-content"></div>
    </div>
  );
}

export default Profile;
