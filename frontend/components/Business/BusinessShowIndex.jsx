import React from "react";
import { Link } from "react-router-dom";
import Star from "../Star/Star";

class BusinessShowIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fetchedReviews: this.props.reviews,
      loading: true,
    };
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.business.id)
    this.setState({ loading: false });
    // console.log(this.props)
  }

  render() {
    const { business, reviews } = this.props;
    if (!this.props.reviews) return null;
    if (this.state.loading === true) {
      return <p>Loading...</p>;
    }
    // console.log(this.props)
    return (
      <div className="business-show">
        <Link to={`/business/${business.id}`} className="link-business-index">
          <img
            className="business-index-photo"
            src={business.photo_urls[0]}
            alt=""
          />
          <p className="business-index-name">{business.name}</p>
          <Star businessId={business.id} />
          <p className="business-index-city">{business.city}</p>
          <p className="business-index-cost">Cost: {business.cost}</p>
          <p className="business-index-hours">
            Hours: {business.open}-{business.close}
          </p>
        </Link>
      </div>
    );
  }
}

export default BusinessShowIndex;
