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

                        
                        {/* <p>test1</p>
                        <p>test3</p>
                        <p>test2</p> */}
                    </div>
                </div>
            </div>

        )

    }
};

export default BusinessIndex;