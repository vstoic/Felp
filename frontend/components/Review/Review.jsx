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
                <Link to={`/business/${this.props.business.id}/review/new`}>
                    <p>Write Review</p>
                </Link>
                <div className="review-item">
                    {this.props.reviews.map((review, idx) => {
                        return (
                            <ReviewItem key={idx} review={review} currentUser={this.props.currentUser} businessId={this.props.business.id}/>
                        )})
                    }
                </div>
            </div>
        )
    }
};

export default Review;