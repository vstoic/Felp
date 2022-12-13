import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)

    };

    componentDidMount() {
        console.log(this.props)
        this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId) 

    };

    render() {
        // console.log(this.props.business.id)
        return (
            <div className="edit-review-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>

            </div>
        )
    }
};

export default EditReview;