import React from "react";
import { Link } from "react-router-dom";
import Star from "../Star/star";

class BusinessShowIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.business.id)
    this.setState({ loading: false });
    // console.log(this.props)
  }

  render() {
    const { business, reviews, key } = this.props;
    if (!this.props.reviews) return null;
    if (this.state.loading === true) {
      return <p>Loading...</p>;
    }
    // console.log(this.props)
    return (
      <section className="business-show">
        <Link to={`/business/${business.id}`} className="link-business-index">
          <img
            className="business-index-photo"
            src={business.photo_urls[0]}
            alt=""
          />
          <div className="business-index-text-star">
            <Star businessId={business.id} />
            <p className="business-index-name">{this.props.number}. {business.name}</p>
            <p>
              <span className="business-hours">Open </span>
              <span className="business-index-hours">until: {business.close}</span>
            </p>
            <p className="business-index-city">
              {business.city}, {business.state}
            </p>
            <p className="business-index-cost">Cost: {business.cost}</p>
          </div>
        </Link>
      </section>
    );
  }
}

export default BusinessShowIndex;
