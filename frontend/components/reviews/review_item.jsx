import React from "react";
import { Link } from 'react-router-dom';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            review: this.props.review 
        };
    };
    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <div className="review-item">
                <div>
                    <p className="reviewer-name">User:{this.state.review.user_id}</p>
                    <p className="review-rating">Rating:{this.state.review.rating}</p>
                    <p className="review-body">Review:{this.state.review.review_body}</p>
                    {(this.props.currentUser) ?
                        this.state.review.user_id === this.props.currentUser.id ? 
                            (<Link to={`/business/${this.props.businessId}/review/${this.state.review.id}/edit`}>
                                <p>Edit Review</p>
                            </Link>) 
                            : null
                        : null
                    }
                </div>
            </div>
        )
    }
};

export default ReviewItem;