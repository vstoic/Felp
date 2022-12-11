import React from "react";
import Nav from '../nav/nav'
import Carousel from "../carousel/carousel";
import Map from "../map/map";
import Review from "../reviews/review";

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Loading: true,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchReviews(this.props.match.params.businessId)
        this.setState({Loading: false})
        // .then((data) => {
        //     this.setState({currentBusiness: data})
        // })
    };

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
    //         this.componentDidMount();
    //     }
    // }

    //questions 
    //why in the render am i checking to see if the prop.business is undefined? then returning null if it is?
    // is why is this.props updating 3 times?

    render() {
        // console.log(this.props)
        if (!this.props.business) return null;
        if (!this.props.reviews) return null;
        if (this.state.Loading === true) {
            return  <p>Loading...</p> 
            }
        return (
        
            <div className="-main-show-page-container">
                <div className='sp-nav'>
                    <Nav currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
                <div className="business-show-container">
                    <div className="sp-middle">
                        <Carousel photos={this.props.business.photo_urls}/>
                        {/* <img className="business-index-photo" src={this.props.business.photo_urls[0]} alt="" /> */}
                        <h1 className="business-index-name">{this.props.business.name}</h1>
                        <h2 className="business-index-stars">★★★★★</h2>
                        <h4 className="business-index-cost">{this.props.business.cost}</h4>
                        <h4 className="business-index-hours">Open: {this.props.business.open} - {this.props.business.close}</h4>
                    </div>
                    <div className="sp-column-spliter">
                        <div className="sp-left">
                            <div className="business-show-reviews">
                                <Review reviews={this.props.reviews} business={this.props.business} />
                            </div>
                        </div>
                        <div className="sp-right">
                            <div className="sp-right-row">
                                <p>Phone Number: {this.props.business.phone_number}</p>
                            </div>
                            <div className="sp-right-row">
                                <p>Website: {this.props.business.website}</p>
                            </div>
                            <div className="sp-right-row">
                                <p>{this.props.business.address}, {this.props.business.city}, {this.props.business.zip_code}</p>
                            </div>
                            <div className="bs-google-map">
                                <Map businesses={this.props.business}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BusinessShow;