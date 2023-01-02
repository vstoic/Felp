import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";

class Review extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
    };

    findReviewer(reviewerId) {

    }

    render() {
        return (
          <div className="review-container">
            {/* <img
              className="review-profile-img"
              src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/31/1427823466140/1fe69f2c-59d6-4e07-ab3a-8b60dbe35db2-1020x1020.jpeg?width=700&quality=85&auto=format&fit=max&s=488d904c14758c38d8010de62c742e4b"
              alt=""
            /> */}
            <div className="review-item">
              {this.props.reviews.map((review, idx) => {
                return (
                  <ReviewItem
                    key={idx}
                    review={review}
                    currentUser={this.props.currentUser}
                    businessId={this.props.business.id}
                  />
                );
              })}
            </div>
          </div>
        );
    }
};

export default Review;