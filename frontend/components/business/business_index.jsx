import React from "react";
import Nav from '../nav/nav'
import { Link } from 'react-router-dom';
import BusinessShowIndex from "./business_show_index_container";
import Map from "../map/map";

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBusinesses();
    }
    render() {
        // console.log(this.props.businesses)
        return (
            <div className="index-main-container">
                <div className='splash-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
                <div className="index-columns">
                    <div className="index-left">
                        <h1>All Results</h1>
                        <div className="businesses-index-container">
                            <div className="businesses-index">
                                {this.props.businesses.map(business => {
                                    return (
                                        <BusinessShowIndex
                                        key={business.id}
                                        business={business}
                                        />
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="index-right">
                        <div className="google-map">
                            <Map businesses={this.props.businesses}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
};

export default BusinessIndex;