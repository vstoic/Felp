import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import { Link } from 'react-router-dom';
import Nav from '../nav/nav'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    this.clearErrors = this.clearErrors.bind(this)
  }

    clearErrors(e) {
        this.props.clearErrors()
    }

    componentDidMount() {
    }

    render() {
        return (
            <div> 
                <nav className='splash-nav'>
                    <div>
                        {/* <button className="splash-link"><Link to="/signup">Sign up</Link></button>
                        <button className="splash-link"><Link to="/login">Log in</Link></button>
                        <button className="logout" onClick={this.props.logout}>Log Out</button> */}
                        <Nav formType={this.props.formType} currentUser={this.props.currentUser} logout={this.props.logout} />
                    </div>
                </nav>

                <main className="splash-main">
                </main> 

                <footer className='splash-footer'>
                </footer>
            </div> 
        )
    }
}

export default Splash;