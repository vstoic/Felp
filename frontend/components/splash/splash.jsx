import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Star from "../Star/Star";
import Footer from "../Footer/Footer";

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
    return (
      <div className="splash-main">
        <div className="sp-nav">
          <Nav
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        </div>
        <div className="img-with-text">
          <img
            className="splash-background-image"
            src="https://images5.alphacoders.com/100/1001016.jpg"
            alt="https://i.postimg.cc/WpyWxXGK/1001016.jpg"
          />
          <div className="bg-text">
            <h1 className="bg-text-1">Fake People. Fake Reviews.</h1>
            <h2 className="bg-text-2">
              Seek the best places to eat, shop, drink and do, well, whatever.
            </h2>
          </div>
        </div>
        <h1 className="business-splash-container-title">Most Reviews</h1>
        <div className="business-filler">
          <div className="business-container">
            {this.props.businesses.map((business) => {
              return (
                <Link
                  to={`/business/${business.id}`}
                  key={business.id}
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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <h1 className="business-index-link">
            <Link to="/businesses">See More</Link>
          </h1>
        </div>
        <div className="splash-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Splash;
