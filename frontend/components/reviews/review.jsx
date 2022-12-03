import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Review extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        
    };

    componentDidMount() {
        // console.log(this.props)
        // this.props.fetchReviews(this.props.business.id);
    };

    render() {
        return (
            <div className="review-container">
            </div>
        )
    }
};

export default Review;