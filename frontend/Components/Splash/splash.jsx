import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/nav";
import Star from "../Star/star";
import Footer from "../Footer/footer";

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
  render() {
    console.log(this.props)
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
          <Link to="/businesses" className="bg-text">
            <h1 className="bg-text-1">Fake People. Fake Reviews.</h1>
            <h2 className="bg-text-2">
              Seek the best places to eat, shop, drink and do, well, whatever.
            </h2>
          </Link>
        </div>
        <h1 className="business-splash-container-title">Businesses:</h1>
        <div className="business-filler">
          <div className="business-container">
            {this.props.businesses.slice(0, 8).map((business) => {
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
                    <div className="splash-star-container">
                      <Star businessId={business.id} />
                      {/* <p>{this.props.reviews.length} Reviews</p> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <h1 className="business-index-link">
            <Link to="/businesses">See All Businesses</Link>
          </h1>
        </div>
        <div className="splash-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

//to do: sort by rating number count. 
export default Splash;
