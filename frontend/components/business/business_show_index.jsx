import React from "react";
import { Link } from 'react-router-dom';


class BusinessShowIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { business: this.props.business }

    }

    render() {
        return (
            <div className="business-show">
                <p>{this.state.business.name}</p>
                <p>{this.state.business.address}</p>
            </div>

        )

    }
};

export default BusinessShowIndex;