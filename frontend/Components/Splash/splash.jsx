import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/nav';
import Star from '../Star/star';
import Footer from '../Footer/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  componentDidMount() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.props.fetchBusinesses();
  }

  renderBusinesses() {
    return this.props.businesses.slice(0, 8).map(business => (
      <Link
        to={`/business/${business.id}`}
        key={business.id}
        className="splash-business-container"
      >
        <img
          className="business-splash-photo"
          src={business.photo_urls[0]}
          alt={`${business.name}`}
        />
        <div className="business-splash-info">
          <p className="business-splash-title">{business.name}</p>
          <div className="splash-star-container">
            <Star businessId={business.id} />
          </div>
        </div>
      </Link>
    ));
  }

  render() {
    return (
      <div className="splash-main">
        <Nav currentUser={this.props.currentUser} logout={this.props.logout} />

        <div className="img-with-text">
          <img
            className="splash-background-image"
            src="https://images5.alphacoders.com/100/1001016.jpg"
            alt="City skyline"
          />
          <Link to="/businesses" className="bg-text">
            <h1 className="bg-text-1">Find Reviews & Help Businesses</h1>
            <h2 className="bg-text-2">
              Seek the best places to eat, shop, drink and do, well, whatever.
            </h2>
          </Link>
        </div>

        <h1 className="business-splash-container-title">Businesses:</h1>
        <div className="business-container">{this.renderBusinesses()}</div>
        <h1>
          <Link to="/businesses" className="business-index-link">
            See All Businesses
          </Link>
        </h1>
        <Footer />
      </div>
    );
  }
}

export default Splash;
