import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import { Link } from 'react-router-dom';
// import NavBar from '../nav_bar/nav_bar'
// import About from '../about/about'
// import SearchBox from '../search_box/search_box';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <header>
                    <h1></h1>
                    <GreetingContainer/>
                </header>
                <div className="splash-main-container">
                    <div className="splash-main-top">
                        <div className="nav">
                            {/* <NavBar formType={this.props.formType} user={this.props.user} logout={this.props.logout} /> */}
                            {/* <SearchBox formType={this.props.formType} searchBusinesses={this.props.searchBusinesses} /> */}
                        </div>
                        <div className="logo-container">
                            {/* <Link to="/"><img className="splash-logo" src="" /></Link> */}
                        </div>
                    </div>
                </div>
                <div className="popular-searches">
                    {/* <PopularSearches searchBusinesses={this.props.searchBusinesses} /> */}
                </div>

                <div className="splash-about">
                    {/* <About /> */}
                </div>
            </div> 
        )
    }
}

export default Splash;