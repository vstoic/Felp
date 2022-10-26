import React from "react";
import { Link } from 'react-router-dom';

class BusinessShowIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { business: this.props.business }

    }
    render() {
        console.log(this.state)
        return (
            <div className="business-show">
                <div ><img className="business-index-photo" src={this.state.business.photo_urls[0]} alt="" /></div>
                <p>{this.state.business.name}</p>
                <p>{this.state.business.address}{this.state.business.city}{this.state.business.state}{this.state.business.zip_code}</p>
                <p>Phone Number: {this.state.business.phone_number}</p>
                <p>Website: {this.state.business.website}</p>
                <p>Open: {this.state.business.open}</p>
                <p>Close: {this.state.business.close}</p>
                <p>Cost: {this.state.business.cost}</p>
                <hr className="hr1"></hr>
            </div>
        )
    }
};

export default BusinessShowIndex;