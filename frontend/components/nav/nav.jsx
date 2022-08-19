import React from 'react';
import { Link } from 'react-router-dom';

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

    notInSession() {
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

    inSession() {
        return (
            <div className='in-session-nav'>
                <div className='splash-logo'>
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
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.currentUser ? this.inSession() : this.notInSession()}
            </div>
        )
    }

}

export default Nav;