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

   

    LoggedOut() {
        return (
            <nav className='no-session-nav'>
                <div className='splash-logo'>
                    <h1>Felp Nav</h1>
                </div>
                <ul>
                    <button className="splash-link"><Link to="/signup">Sign up</Link></button>
                    <button className="splash-link"><Link to="/login">Log in</Link></button>
                </ul>
            </nav>
        )
    }

    loggedIn() {
        return (
            <div className='in-session-nav'>
                {/* <div className='splash-logo'>
                    <h1>Felp Nav</h1>
                </div>
                <div className='dropdown'>
                    <div className="dropdown-click">
                        <button onClick={() => this.handleClick()} className='dropdownbutton'>
                            
                        </button>
                    </div>
                    <div className='dropdowncontent'>
                        <div className='userprofile'>

                        </div>
                        <button className='nav-logout' onClick={this.props.logout}>Log Out</button>
                    </div>
                </div> */}

                

                <div class="navbar">
                    <a href="#home">logo</a>
                    <a href="#news">search bar</a>
                    <div class="dropdown">
                        <button class="dropbtn" onClick={() => this.handleClick()} >Dropdown
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content" id="myDropdown">
                            <p >Profile</p>
                            <p >Reviews</p>
                            <button className='nav-logout' onClick={this.props.logout}>Log Out</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.currentUser ? this.loggedIn() : this.LoggedOut()}
            </div>
        )
    }

}

export default Nav;