import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import ReviewItem from "./review_item";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading: true,
            rating: 0,
            body: '',
            // currentUser: this.props.currentUser,
            // business_id: this.props.match.params.businessId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        // this.clearErrors = this.clearErrors.bind(this);
    };

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.businessId);
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.setState({ Loading: false });
    };

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review, this.props.business.id)
        .then(()=> this.props.history.push(`/business/${this.props.business.id}`))
    };

    handleChanges(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    // clearErrors() {
    //     this.props.clearReviewErrors();
    // };
    
    render() {
        if (!this.props.business) return null;
        if (!this.props.reviews) return null;
        if (this.state.Loading === true) {
            return <p>Loading...</p>
        }
        return (
            <div className="review-form-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                <div className="review-form-spliter">
                    <div className="review-form-left">
                        <h1>Write a Review</h1>
                        <h1>{this.props.business.name}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <textarea className="review-textbox" onChange={this.handleChanges('body')} placeholder='Insert Review Here'></textarea>
                            <button type="submit" >Submit Review</button>
                        </form>
                    </div>
                    <div className="review-form-right">
                        <h2>Other Reviews:</h2>
                        {Object.entries(this.props.reviews).map(([key, review]) => {
                            return (
                            <ReviewItem key={key} review={review} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
};
export default ReviewForm;