import React from "react";
import { Link } from 'react-router-dom';

class ReviewItem extends React.Component {
    constructor(props) {

        super(props)
        this.state = { review: this.props.review }
    }
    render() {
        // console.log(this.state)
        return (
            <div className="review-item">
                <div>
                    <p className="reviewer-name">{this.state.review.user_id}</p>
                    <p className="review-rating">{this.state.review.rating}</p>
                    <p className="review-body">{this.state.review.review_body}</p>
                </div>
            </div>
        )
    }
};

export default ReviewItem;