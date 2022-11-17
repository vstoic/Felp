import React from "react";
import Nav from '../nav/nav'
import Carousel from "../carousel/carousel";

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Loading: true,
        }
    }
    componentDidMount() {
        // window.scrollTo(0, 0);
        // console.log(this.props)
        this.props.fetchBusiness(this.props.match.params.businessId)
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
        console.log(this.props)
        if (!this.props.business) return null;
        if (this.state.Loading === true) {
            return  <p>Loading...</p> 
            }
        return (
        
            <div className="-main-show-page-container">
                <div className='sp-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
                <div className="business-show-container">
                    <div className="sp-middle">
                        <Carousel photos={this.props.business.photo_urls}/>
                        {/* <img className="business-index-photo" src={this.props.business.photo_urls[0]} alt="" /> */}
                        <p className="business-index-name">{this.props.business.name}</p>
                        <p className="business-index-stars">★★★★★</p>
                        <p className="business-index-cost">Cost: {this.props.business.cost}</p>
                        <p className="business-index-hours">Hours: {this.props.business.open} - {this.props.business.close}</p>
                    </div>
                    <div className="sp-column-spliter">
                        <div className="sp-left">
                            <p>reviews</p>
                        </div>
                        <div className="sp-right">
                            <p>Phone Number: {this.props.business.phone_number}</p>
                            <p>Website: {this.props.business.website}</p>
                            <p>{this.props.business.address}, {this.props.business.city}, {this.props.business.zip_code}</p>
                            <div>G Map</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default BusinessShow;