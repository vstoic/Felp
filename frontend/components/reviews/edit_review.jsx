import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import ReviewItem from "./review_item";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            rating: 4,
            review_body: '',
            user_id: this.props.currentUser.id,
            business_id: parseInt(this.props.match.params.businessId),
            id: parseInt(this.props.match.params.reviewId),
            hover: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    };

    componentDidMount() {
        this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId);
        this.props.fetchReviews(this.props.match.params.businessId); 
        console.log(this.state)

    };

    handleSubmit(e) {
        // console.log(this.props)
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.editReview(review, this.state.business_id);
        this.props.history.push(`/business/${this.state.business_id}`)
    };

    handleChanges(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    deleteReview() {
        this.props.deleteReview(this.state.id, this.state.business_id);
        this.props.history.push(`/business/${this.state.business_id}`)
    };

    clearErrors() {
        this.props.clearReviewErrors();
    };

    render() {
        // console.log(this.props)
        let errors;
        if (this.props.errors) {
            errors = this.props.errors.map((error, i) => {
                return <li key={i}>{error}</li>
            })
        }
        // if (!this.props.business) return null;
        if (!this.props.review) return null;

        return (
            <div className="edit-review-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                <div className="ereview-form-spliter">
                    <div className="ereview-form-left">
                        <h1>Write a Review</h1>
                        <button className='delete-review' onClick={this.deleteReview}>Remove Review</button>
                        <div className="star-review-container">
                            {Array(5).fill().map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label key={i} >
                                        <input
                                            type="radio"
                                            name="rating"
                                            className="rating"
                                            value={ratingValue}
                                            onClick={this.handleChanges('rating')}
                                        />
                                        <AiFillStar
                                            className="stars"
                                            color={ratingValue <= (this.state.hover || this.state.rating) ? "#ffc107" : "#e4e5e9"}
                                            onMouseOver={() => this.setState({ hover: ratingValue })}
                                            onMouseLeave={() => this.setState({ hover: null })}
                                            size={25} />
                                    </label>
                                )
                            })}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <textarea className="ereview-textbox" onChange={this.handleChanges('review_body')} placeholder={this.props.review.review_body}>{this.props.review.review_body}</textarea>
                            <button type="submit" onChange={this.clearErrors} >Submit Review</button>
                        </form>
                        <div className="ereview-errors-container">
                            <ul className="errors">
                                {errors}
                            </ul>
                        </div>
                    </div>
                    <div className="ereview-form-right">
                        <h2>Other Reviews:</h2>
                        {Object.entries(this.props.reviews).map(([key, review]) => {
                            return (
                                <ReviewItem key={key} review={review} currentUser={this.props.currentUser} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export default EditReview;