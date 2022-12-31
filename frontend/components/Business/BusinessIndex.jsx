import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import BusinessShowIndex from "./BusinessShowIndexContainer";
import Map from "../Map/Map";
import { fetchReviews } from "../../Actions/ReviewActions";

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchedBusinesses: this.props.history.location.state
    };
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusinesses();
  }
  render() {
    // console.log(this.props)
    // added if statement to render businesses either from search results show all businesses.
    return (
      <div className="index-main-container">
        <div className="splash-nav">
          <Nav
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        </div>
        {this.state.searchedBusinesses ? (
          <div className="index-columns">
            <div className="index-left">
              <h1 >Results:</h1>
              <div className="businesses-index-container">
                <div className="businesses-index">
                  {this.state.searchedBusinesses.map((business, index) => {
                    const number = index + 1;
                    return (
                      <BusinessShowIndex
                        key={number}
                        business={business}
                        number={number}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="index-right">
              <div className="google-map">
                <Map businesses={this.state.searchedBusinesses} />
              </div>
            </div>
          </div>
        ) : (
          <div className="index-columns">
            <div className="index-left">
              <h1>All Results:</h1>
              <div className="businesses-index-container">
                <div className="businesses-index">
                  {this.props.businesses.map((business, index) => {
                    const number = index + 1;
                    return (
                      <BusinessShowIndex
                        key={business.id}
                        business={business}
                        number={number}
                      />
                    );
                  })}
                  ;
                </div>
              </div>
            </div>
            <div className="index-right">
              <div className="google-map">
                <Map businesses={this.props.businesses} />
              </div>
            </div>
          </div>
        )}
        <div className="bottom-white-cover"></div>
      </div>
    );
  }
}

export default BusinessIndex;
