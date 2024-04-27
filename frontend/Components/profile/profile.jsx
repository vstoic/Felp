import React, { useEffect } from 'react';
function Profile(props) {
  console.log(props);
  useEffect(() => {
    // let user = props.fetchUser(props.currentUser);
    // console.log(user);
  }, []);
  return (
    <div className="profile-container">
      {/* <Nav currentUser={props.currentUser} logout={props.logout} /> */}
      <div className="profile-page">
        <div className="profile-column">
          <section className="profile-card">
            <div className="avatar-container">
              <img
                src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/31/1427823466140/1fe69f2c-59d6-4e07-ab3a-8b60dbe35db2-1020x1020.jpeg?width=700&quality=85&auto=format&fit=max&s=488d904c14758c38d8010de62c742e4b"
                alt="User avatar"
                className="avatar"
              />
            </div>
            {/* <h2 className="username">{props.currentUser}</h2> */}
            <p className="location">New York, NY</p>
            <div className="profile-actions">
              <button className="action">Edit profile</button>
              <button className="action">Add photo</button>
              <button className="action">Coming Soon</button>
            </div>
          </section>
          <section className="profile-navigation">
            <button className="nav-item">Profile overview</button>
            <button className="nav-item">Reviews</button>
            <button className="nav-item">Collections</button>
            <button className="nav-item">Events</button>
          </section>
        </div>
        <section className="additional-info">
          <h3>More Info:</h3>
          <div className="info-item">
            <p>Location: New York, NY</p>
            <p>Yelping since: March 2024</p>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Profile;
