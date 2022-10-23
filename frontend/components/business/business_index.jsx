import React from "react";
import Nav from '../nav/nav'
import { Link } from 'react-router-dom';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className='splash-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
                <p>this is the business index page</p>

            </div>

        )

    }
};

export default BusinessIndex;