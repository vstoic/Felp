import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../nav/nav";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
            // currentUser: this.props.currentUser,
            // business_id: this.props.match.params.businessId
        }
    };

    handleSubmit(e) {

    };

    handleChanges(e) {

    };
    
    render() {
        return (
            <div className="review-form-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                {/* <div className="review-form-spliter">
                    <div className="review-form-left">
                        <p>this is for the form</p>
                    </div>
                    <div className="review-form-right">
                        <p>this is for previous reviews</p>
                    </div>
                </div> */}
            </div>
        )
    }
};
export default ReviewForm;