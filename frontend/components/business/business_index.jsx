import React from "react";
import Nav from '../nav/nav'
import { Link } from 'react-router-dom';
import BusinessShowIndex from "./business_index_item";

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.businesses)
        return (
            <div>
                <div className='splash-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                <div className="businesses-index-container">
                    <div className="businesses-index">
                        {this.props.businesses.map(business => {
                            return (
                                <BusinessShowIndex
                                    key={business.id}
                                    business={business}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

        )

    }
};

export default BusinessIndex;