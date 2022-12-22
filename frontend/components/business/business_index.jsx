import React from "react";
import Nav from '../nav/nav'
import { Link } from 'react-router-dom';
import BusinessShowIndex from "./business_show_index_container";
import Map from "../map/map";
import { fetchReviews } from "../../actions/review_actions";

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedBusinesses: this.props.history.location.state
        }
        this.getReviews = this.getReviews.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBusinesses();

    }

    getReviews(businessId) {
        reviews = this.props.fetchReviews(businessId);
        console.log(reviews);
        return reviews;
    }

    render() {
        // console.log(this.state.searchedBusinesses)
        // added if statement to render businesses either from search results show all businesses. 
        return (
            <div className="index-main-container">
                <div className='splash-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
                {this.state.searchedBusinesses ?
                    <div className="index-columns">
                        <div className="index-left">
                            <h1>Results</h1>
                            <div className="businesses-index-container">
                                <div className="businesses-index">
                                    {this.state.searchedBusinesses.map(business => {
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
                                <Map businesses={this.state.searchedBusinesses}/>
                            </div>
                        </div>
                    </div>
                    :
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
                                <Map businesses={this.props.businesses} />
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
};

export default BusinessIndex;