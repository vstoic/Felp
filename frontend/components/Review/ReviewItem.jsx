import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineEdit } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa"

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
    };
  }
  render() {
    // console.log(this.state.review);
    return (
      <div className="review-item-container">
        <div className="reviewer-container">
          <p className="reviewer-name">{this.state.review.reviwer_username}</p>
          <div className="edit-review">
            {this.props.currentUser ? (
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
                  borderRadius: "4px",
                  marginLeft: ".1vh",
                  marginRight: ".1vh",
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
          <p className="review-date">{this.state.review.created_at}</p>
        </div>
        <p className="review-body">{this.state.review.review_body}</p>
      </div>
    );
  }
}

export default ReviewItem;
