import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import Review from "./review";
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
            // currentUser: this.props.currentUser,
            // business_id: this.props.match.params.businessId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    };

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.businessId);
        this.props.fetchReviews(this.props.match.params.businessId);

    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review, this.props.business.id)
        .then(()=> this.props.history.push(`/business/${this.props.business.id}`))
    };

    handleChanges(e) {
        return e => this.setState({ [field]: e.target.value })
    };

    clearErrors() {
        this.props.clearReviewErrors();
    };
    
    render() {
        console.log(this.props)
        return (
            <div className="review-form-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="review-form-spliter">
                        <div className="review-form-left">
                            <h1>Write a Review</h1>
                            <textarea className="review-textbox" onChange={this.handleChanges('body')} placeholder='Insert Review Here'></textarea>
                            <button type="submit" onClick={this.clearErrors}>Submit Review</button>
                        </div>
                    </div>
                </form>
                <div className="review-form-right">
                    {/* <Review business={this.props.business} reviews={this.props.reviews} /> */}
                </div>
            </div>
        )
    }
};
export default ReviewForm;