import React from "react";
import { Link } from 'react-router-dom';


class BusinessShowIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { business: this.props.business }

    }

    render() {
        return (
            <div className="business-show-index">
                <p>{this.state.business.name}</p>
                <p>{this.state.business.address}{this.state.business.city}{this.state.business.state}{this.state.business.zip_code}</p>
                <div>Phone Number: {this.state.business.phone_number}</div>
                <p>Website: {this.state.business.website}</p>
                <p>Open: {this.state.business.open}</p>
                <p>Close: {this.state.business.close}</p>
                <div>Cost: {this.state.business.cost}</div>
                <hr className="hr1"></hr>
            </div>

        )

    }
};

export default BusinessShowIndex;