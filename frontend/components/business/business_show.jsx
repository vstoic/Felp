import React from "react";
import Nav from '../nav/nav'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchReviews(this.props.match.params.businessId)
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
            this.componentDidMount()
        }
    }

    starRating() {
        if (this.props.reviews.length === 0) return null;
        let averagegRating = 0;
        this.props.reviews.forEach(review => {
            averagegRating += review.rating
        })
        let rating = (averagegRating / this.props.reviews.length).toFixed(2)
        if (rating >= 9) {
            return "5 stars"
        } else if (rating >= 8) {
            return "4.5 stars"
        } else if (rating >= 7) {
            return "4 stars"
        } else if (rating >= 6) {
            return "3.5 stars"
        } else if (rating >= 5) {
            return "3 stars"
        } else if (rating >= 4) {
            return "2.5 stars"
        } else if (rating >= 3) {
            return "2 stars"
        } else if (rating >= 2) {
            return "1.5 stars"
        } else if (rating >= 0) {
            return "1 stars"
        }
    }

    render() {
        return(
            <div className="-main-show-page-container">
                <div className='sp-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>

                <div className="sp-image-container">
                </div>

                <div className="sp-body">

                    <div className="sp-body-left">
                    </div>
                    
                    <div className="sp-body-right">
                    </div>

                </div>
            </div>
        )
    }
};

export default BusinessShow;