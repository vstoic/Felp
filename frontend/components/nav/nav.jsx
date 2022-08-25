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
                            src="https://i.postimg.cc/brmQWKyZ/felp-logo.png" /></Link>
                        <div className='nav-middle'>
                            {/* <form to="/">
                                <input type="text" placeholder="Feature Coming Soon~" className="search-input" />
                                <button className='search-button'>🔍</button>
                            </form> */}
                        </div>
                        <div className='nav-right'>
                            <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
                            <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
                            <div className="dropdown">




                                <button className="dropbtn" onClick={() =>
                                    this.handleClick()} > D
                                </button>



                            </div>
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
                                src="https://i.postimg.cc/brmQWKyZ/felp-logo.png" />
                            </Link>
                        </div>
                        <div className='nav-middle'>
                            {/* <form to="/">
                                <input type="text" placeholder="Feature Coming Soon~" className="search-input" />
                                <button className='search-button'>🔍</button>
                            </form> */}
                        </div>
                        <div className='nav-right'>
                            <a href="https://www.linkedin.com/in/victorcheng3/" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                                src="https://i.postimg.cc/jjHFWSqP/thin-white-linkedin.png" /></a>
                            <a href="https://github.com/vstoic" target="_blank" rel="noopener noreferrer"><img className="personal-link"
                                src="https://i.postimg.cc/BbLbgyV5/github-white.png" /></a>
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