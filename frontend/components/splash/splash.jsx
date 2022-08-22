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
            <div className='splash-main'> 
                <div className='splash-nav'>
                    <Nav formType={this.props.formType} 
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout} />
                </div>
                <img className="splash-background" src="https://i.postimg.cc/t70MBSqy/o.jpg" />

                
                <body></body>

                <footer className='splash-footer'>
                </footer>
            </div> 
        )
    }
}

export default Splash;