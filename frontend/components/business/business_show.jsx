import React from "react";
import Nav from '../nav/nav'


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        // console.log(this.props)
        this.props.fetchBusiness(this.props.match.params.businessId);
    };
    componentDidUpdate(prevProps) {
        if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
            this.componentDidMount();
        }
    }
    render() {
        console.log(this.props)
        return(
            <div className="-main-show-page-container">
                <div className='sp-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
              
                {/* <div className="business-title">{this.props.business}</div> */}

            </div>
        )
    }
};

export default BusinessShow;