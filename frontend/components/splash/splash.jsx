import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Star from "../Star/Star";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.clearErrors = this.clearErrors.bind(this);
  }
  clearErrors(e) {
    this.props.clearErrors();
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.props.fetchBusinesses();
  }
  sortBusinessesReviewScore() {
    let reviewCountObject = {};
    for (let i = 0; i < this.props.businesses.length; i++) {
      let business = this.props.businesses[i];
      let reviewCount = business.reviewIds.length;
      reviewCountObject[business.id] = reviewCount;
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="whitespace">
        <div className="splash-main">
          <div className="splash-nav">
            <Nav
              currentUser={this.props.currentUser}
              logout={this.props.logout}
            />
          </div>
          <img
            className="splash-background"
            src="https://images5.alphacoders.com/100/1001016.jpg"
            alt="https://i.postimg.cc/WpyWxXGK/1001016.jpg"
          />
          <div className="bg-text">
            <h1 className="bg-text-1">Fake People. Fake Reviews.</h1>
            <h2 className="bg-text-2">
              {" "}
              Seek the best places to eat, shop, drink and do, well, whatever.
            </h2>
          </div>
        </div>
        <h1 className="business-index-link">
          <Link to="/businesses">All Businesses</Link>
        </h1>
        <h1 className="business-splash-container-title">Most Reviews</h1>
        <div className="business-filler">
          <div className="business-container">
            {this.props.businesses.map((business) => {
              return (
                <Link
                  to={`/business/${business.id}`}
                  className="splash-business-container"
                >
                  <img
                    className="business-splash-photo"
                    src={business.photo_urls[0]}
                    alt=""
                  />
                  <div className="business-splash-info">
                    <p className="business-splash-title">{business.name}</p>
                    <div className="hot-new-info-rating-container-2">
                      <Star businessId={business.id} />
                      <p className="splash-review-count">342 Reviews</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <footer className="splash-footer"></footer>
        </div>
      </div>
    );
  }
}

export default Splash;
