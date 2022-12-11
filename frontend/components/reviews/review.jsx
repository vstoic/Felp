import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReviewItem from "./review_item";

class Review extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
    };

    componentDidMount() {
    };

    render() {
        // console.log(this.props)
        return (
            <div className="review-container">
                <Link to={`/business/${this.props.business.id}/review/new`}>
                    <p>Create Review</p>
                </Link>
                <div className="review-item">
                    {this.props.reviews.map((review, idx) => {
                        return (
                            <ReviewItem key={idx} review={review}/>
                        )})
                    }
                </div>
            </div>
        )
    }
};

export default Review;