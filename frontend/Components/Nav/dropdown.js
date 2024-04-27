import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AccountDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log('props:', props);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userId = props.currentUser.id;

  return (
    <div className="account-dropdown">
      <div className="dropdown">
        <img
          className="dropbtn"
          onClick={toggleDropdown}
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/31/1427823466140/1fe69f2c-59d6-4e07-ab3a-8b60dbe35db2-1020x1020.jpeg?width=700&quality=85&auto=format&fit=max&s=488d904c14758c38d8010de62c742e4b"
        ></img>
      </div>
      {isOpen && (
        <ul className="account-dropdown__menu">
          <ul className="account-dropdown__menu-item">
            <Link to={`/profile/${userId}`}>Profile</Link>
          </ul>
          <ul className="account-dropdown__menu-item" onClick={props.logout}>
            Logout
          </ul>
        </ul>
      )}
    </div>
  );
}

export default AccountDropdown;
