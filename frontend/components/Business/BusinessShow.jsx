import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Map from "../Map/Map";
import Review from "../Review/Review";
import Star from "../Star/Star";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { BsPinMap, BsFillBookmarkStarFill } from "react-icons/bs";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
    };
    // this.handleStars = this.handleStars.bind(this);
    // this.distributeStars = this.distributeStars.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId);
    this.setState({ Loading: false });
    // .then((data) => {
    //     this.setState({currentBusiness: data})
    // })
  }

  // distributeStars(avgRating) {
  //     return (
  //         <div className="stars">
  //             <div>
  //                 <AiFillStar/>
  //             </div>
  //             {/* {Array(avgRating).fill().map((star, i) => {
  //                 const ratingValue = i + 1;
  //                 return (
  //                         <AiFillStar
  //                             className="stars"
  //                             color={ratingValue <= (avgRating) ? "#ffc107" : "#e4e5e9"}
  //                             size={25} />
  //                 )
  //             })} */}
  //         </div>
  //     )
  // }

  // handleStars() {
  //     let totalStars = 0;
  //     this.props.reviews.forEach(review => {
  //         totalStars += review.rating;
  //     })
  //     let averageStars = Math.ceil(totalStars / this.props.reviews.length);
  //     console.log(averageStars)
  //     switch (averageStars) {
  //         case averageStars >= 4 && averageStars <= 5:
  //             return this.distributeStars(5);
  //         case averageStars >= 3 && averageStars < 4:
  //             return this.distributeStars(4);
  //         case averageStars >= 2 && averageStars < 3:
  //             return this.distributeStars(3);
  //         case averageStars >= 1 && averageStars < 2:
  //             return this.distributeStars(2);
  //         case averageStars >= 0 && averageStars < 1:
  //             return this.distributeStars(1);
  //         default:
  //             return this.distributeStars(0);
  //         }
  // }

  // componentDidUpdate(prevProps) {
  //     if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
  //         this.componentDidMount();
  //     }
  // }

  //questions
  //why in the render am i checking to see if the prop.business is undefined? then returning null if it is?
  // is why is this.props updating 3 times?

  render() {
    console.log(this.props);
    if (!this.props.business) return null;
    if (!this.props.reviews) return null;
    if (this.state.Loading === true) {
      return <p>Loading...</p>;
    }
    return (
      <div className="-main-show-page-container">
        <Nav currentUser={this.props.currentUser} logout={this.props.logout} />

        <div className="business-show-container">
          <Carousel photos={this.props.business.photo_urls} />
          <div className="sp-middle">
            <h1 className="sp-name">{this.props.business.name}</h1>
            <div className="sp-stars">
              <Star businessId={this.props.business.id} />
              <p>{this.props.reviews.length} Reviews</p>
              <p className="sp-cost">{this.props.business.cost}</p>
            </div>
            <p className="sp-hours">
              Open: {this.props.business.open} - {this.props.business.close}
            </p>
          </div>
          <div className="sp-column-spliter">
            <div className="sp-left">
              <div className="business-show-reviews">
                <Review
                  reviews={this.props.reviews}
                  business={this.props.business}
                  currentUser={this.props.currentUser}
                />
              </div>
            </div>
            <div className="sp-right">
              <div className="sp-right-buttons">
                <Link
                  className="review-buttons"
                  to={`/business/${this.props.business.id}/review/new`}
                >
                  Write Review
                </Link>
                <div className="bookmark-business">
                  <BsFillBookmarkStarFill size="3vw" />
                </div>
              </div>
              <div className="sp-contact-container">
                <div className="sp-website">
                  <p>{this.props.business.website}</p>
                  <CgWebsite />
                </div>
                <div className="sp-call">
                  <p>Phone Number: {this.props.business.phone_number} </p>
                  <FiPhoneCall />
                </div>
                <div className="sp-address-directions">
                  <div className="address-directions">
                    <a
                      href={`https://www.google.com/maps/dir//${this.props.business.lat},${this.props.business.lng}`}
                    >
                      Get Directions
                    </a>
                    <p>
                      {this.props.business.address}, {this.props.business.city},{" "}
                      {this.props.business.zip_code}
                    </p>
                  </div>
                  <BsPinMap />
                </div>
              </div>
              <div className="bs-google-map">
                <Map businesses={this.props.business} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessShow;
