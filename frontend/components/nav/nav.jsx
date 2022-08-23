import React from 'react';
import { Link } from 'react-router-dom';
import dropdown from './dropdown';

class Nav extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.formType === "splash") {
            this.type = "splash"
        } else if (this.props.formType === "other_pages") {
            this.type = "other_pages"
        } else if (this.props.formType === "review_pages") {
            this.type = "review_pages"
        }
    }

    handleClick() {
        document.getElementById("myDropdown").classList.toggle("show");
    }


    render() {
        return (
            <div>
                {this.props.currentUser ?
                    <div className='in-session-nav'>
                        <Link to="/"><img className="logo"
                            src="https://i.postimg.cc/1RD4Mg5c/felp-logo.png" /></Link>
                        <div className='searchbar'>search</div>
                        <div className="dropdown">
                            <button className="dropbtn" onClick={() =>
                                this.handleClick()} > D
                            </button>
                            <div className="dropdown-content" id="myDropdown">
                                <p >Profile</p>
                                <p >Reviews</p>
                                <button className='nav-logout' onClick={this.props.logout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <nav className='no-session-nav'>
                        <div className='splash-logo'>
                            <Link to="/"><img className="logo"
                                src="https://i.postimg.cc/1RD4Mg5c/felp-logo.png" />
                            </Link>
                        </div>
                        <div className='logged-out-buttons'>
                            <Link className="splash-button-login" to='/login'>Log In</Link>
                            <Link className="splash-button-signup" to='/signup'>Sign Up</Link>
                        </div>
                    </nav>
                }
            </div>
        )
    }

}

export default Nav;