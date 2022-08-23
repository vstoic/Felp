import React from "react";
import Nav from '../nav/nav'


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className='splash-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout} />
                </div>
            </div>

        )

    }
};

export default BusinessIndex;