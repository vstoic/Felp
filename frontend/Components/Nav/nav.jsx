import React from 'react';
import { Link } from 'react-router-dom';
import Search_container from '../Search/searchContainer';
import AccountDropdown from './dropdown';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        // if (this.props.formType === "splash") {
        //     this.type = "splash"
        // } else if (this.props.formType === "other_pages") {
        //     this.type = "other_pages"
        // } else if (this.props.formType === "review_pages") {
        //     this.type = "review_pages"
        // }
    }
    handleClick() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render() {
        return (
          <div className="navs" style={this.props.style}>
            {this.props.currentUser ? (
              <div className="in-session-nav">
                <Link to="/">
                  <img
                    className="logo"
                    src="https://i.postimg.cc/0yBFnCHX/logo.png"
                  />
                </Link>
                <div className="nav-middle">
                  <Search_container location={this.props.location} />
                </div>
                <div className="nav-right">
                  <a
                    href="https://www.linkedin.com/in/victorcheng3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="personal-link"
                      src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png"
                    />
                  </a>
                  <a
                    href="https://github.com/vstoic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="personal-link"
                      src="https://i.postimg.cc/BbLbgyV5/github-white.png"
                    />
                  </a>
                  
                  <AccountDropdown logout={this.props.logout} />
                </div>
              </div>
            ) : (
              <nav className="no-session-nav">
                <div className="splash-logo">
                  <Link to="/">
                    <img
                      className="logo"
                      src="https://i.postimg.cc/0yBFnCHX/logo.png"
                    />
                  </Link>
                </div>
                <div className="nav-middle">
                  <Search_container location={this.props.location} />
                </div>
                <div className="nav-right">
                  <a
                    href="https://www.linkedin.com/in/victorcheng3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="personal-link"
                      src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png"
                    />
                  </a>
                  <a
                    href="https://github.com/vstoic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="personal-link"
                      src="https://i.postimg.cc/BbLbgyV5/github-white.png"
                    />
                  </a>
                  <Link className="splash-button-login" to="/login">
                    Log In
                  </Link>
                  <Link className="splash-button-signup" to="/signup">
                    Sign Up
                  </Link>
                </div>
              </nav>
            )}
          </div>
        );
    }
}

export default Nav;



