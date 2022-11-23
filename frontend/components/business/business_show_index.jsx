import React from "react";
import { Link } from 'react-router-dom';

class BusinessShowIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { business: this.props.business }
    }
    render() {
        // console.log(this.state)
        return (
            <div className="business-show">
                <Link to={`/business/${this.state.business.id}`} className='link-business-index'>
                    <img className="business-index-photo" src={this.state.business.photo_urls[0]} alt=""/>
                    <p className="business-index-name">{this.state.business.name}</p>
                    <p className="business-index-stars">★★★★★</p>
                    <p className="business-index-city">{this.state.business.city}</p>
                    <p className="business-index-cost">Cost: {this.state.business.cost}</p>
                    {/* <p>{this.state.business.address}{this.state.business.city}{this.state.business.state}{this.state.business.zip_code}</p> */}
                    {/* <p>Phone Number: {this.state.business.phone_number}</p> */}
                    {/* <p>Website: {this.state.business.website}</p> */}
                    <p className="business-index-hours">Hours: {this.state.business.open} - {this.state.business.close}</p>
                    {/* <hr className="hr1"></hr> */}
                </Link>
            </div>
        )
    }
};

export default BusinessShowIndex;