import React from "react";
import { Link } from 'react-router-dom';


class BusinessShowIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { business: this.props.business }

    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.businesses)
        return (
            <div className="business-show">
                <p>{this.props.business.name}</p>
                <p>{this.props.business.address}</p>
            </div>

        )

    }
};

export default BusinessShowIndex;