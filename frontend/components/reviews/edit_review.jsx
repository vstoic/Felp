import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReviewItem from "./review_item";

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)

    };

    componentDidMount() {

    };

    render() {
        // console.log(this.props.business.id)
        return (
            <div className="update-review-container">
                
            </div>
        )
    }
};

export default EditReview;