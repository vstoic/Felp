import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineEdit } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
      page: this.props.page
    };
  }
  render() {
    // console.log(this.state.review);
    return (
      <div className="review-item-container">
        <img
          className="review-profile-img"
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/31/1427823466140/1fe69f2c-59d6-4e07-ab3a-8b60dbe35db2-1020x1020.jpeg?width=700&quality=85&auto=format&fit=max&s=488d904c14758c38d8010de62c742e4b"
          alt=""
        />
        <div className="review-item-content">
          <div className="reviewer-container">
            <div className="reviewer-name">
              {this.state.review.reviwer_username}
            </div>
          </div>
          <div className="reviewer-rating">
            <div className="review-rating-star">
              {Array(5)
                .fill()
                .map((_, i) => {
                  const ratingValue = i + 1;
                  const style = {
                    backgroundColor:
                      ratingValue <= this.state.review.rating
                        ? "#d32322"
                        : "#e4e5e9",
                    color: "#ffffff",
                    height: "1vw",
                    width: "1vw",
                    borderRadius: "10px",
                    marginLeft: "2.5px",
                    padding: "4px",
                  };
                  return (
                    <div className="each-star">
                      <AiFillStar
                        className="star"
                        style={style}
                        // backgroundColor="#e4e5e9"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="review-body">
            <p>{this.state.review.review_body}</p>
          </div>
          <div className="review-bottom">
            <div className="edit-review">
              {this.props.currentUser && (this.state.page === "businessShow") ? (
                this.state.review.user_id === this.props.currentUser.id ? (
                  <Link
                    to={`/business/${this.props.businessId}/review/${this.state.review.id}/edit`}
                  >
                    <FaRegEdit
                      style={{
                        color: "black",
                        //   size: "1.5vh",
                        backgroundColor: "white",
                      }}
                    />
                  </Link>
                ) : null
              ) : null}
            </div>
            <p className="review-date">{this.state.review.created_at}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
