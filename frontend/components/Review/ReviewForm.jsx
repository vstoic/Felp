import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Nav from "../Nav/Nav";
import ReviewItem from "./ReviewItem";
import Footer from "../Footer/Footer";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      review_body: "",
      user_id: this.props.currentUser.id,
      business_id: parseInt(this.props.match.params.businessId),
      hover: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.starHover = this.starHover.bind(this);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.props.fetchReviews(this.props.match.params.businessId);
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review, this.state.business_id);
    this.props.history.push(`/business/${this.state.business_id}`);
  }

  handleChanges(field) {
    return (e) => this.setState({ [field]: e.target.value });
    // console.log(this.state)
  }

  clearErrors() {
    this.props.clearReviewErrors();
  }

  starHover(value) {
    // return e => this.setState({ hover: e.value });
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, i) => {
        return <li key={i}>{error}</li>;
      });
    }
    if (!this.props.business) return null;
    if (!this.props.reviews) return null;
    // if (this.props.loading === true) {
    //     return <p>Loading...</p>
    // }

    return (
      <div className="review-form-container">
        <div className="sp-nav">
          <Nav
            currentUser={this.props.currentUser}
            logout={this.props.logout}
          />
        </div>
        <div className="review-form-spliter">
          <div className="review-form-left">
            {/* <h1>Write a Review</h1> */}
            <h1 className="form-title">{this.props.business.name}</h1>
            <div className="star-review-container">
              {Array(5)
                .fill()
                .map((star, i) => {
                  const ratingValue = i + 1;
                  const style = {
                    backgroundColor:
                      ratingValue <= (this.state.hover || this.state.rating)
                        ? "#d32322"
                        : "#e4e5e9",
                    color: "#ffffff",
                    height: "2.5vw",
                    width: "2.5vw",
                    borderRadius: "10px",
                    marginLeft: "2.5px",
                    padding: "4px",
                  };
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name="rating"
                        className="rating"
                        value={ratingValue}
                        onClick={this.handleChanges("rating")}
                      />
                      <AiFillStar
                        className="stars"
                        style={style}
                        onMouseOver={() =>
                          this.setState({ hover: ratingValue })
                        }
                        onMouseLeave={() => this.setState({ hover: null })}
                        size={25}
                      />
                    </label>
                  );
                })}
            </div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                className="review-textbox"
                onChange={this.handleChanges("review_body")}
                placeholder="I recently visited this business and was pleasantly surprised by the high level of professionalism and excellence on display. The staff were knowledgeable, friendly, and efficient, and the products/services offered were top-notch. The atmosphere was inviting and the overall experience was enjoyable. I will definitely be returning in the future and highly recommend this business to others."
              ></textarea>
              <button
                type="submit"
                className="form-button"
                onChange={this.clearErrors}
              >
                Submit Review
              </button>
            </form>
            <div className="review-errors-container">
              <ul className="errors">{errors}</ul>
            </div>
          </div>
          <div className="review-form-right">
            <h2 className="form-other-title">Recent Reviews:</h2>
            {Object.entries(this.props.reviews).map(([key, review]) => {
              return (
                <ReviewItem
                  key={key}
                  review={review}
                  currentUser={this.props.currentUser}
                />
              );
            })}
          </div>
        </div>
        <div className="review-form-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default ReviewForm;
