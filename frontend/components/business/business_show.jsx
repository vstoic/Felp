import React from "react";
import Nav from '../nav/nav'


class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchBusiness(this.props.match.params.businessId);
    };
    componentDidUpdate(prevProps) {
        if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
            this.componentDidMount();
        }
    }
    render() {
        return(
            <div className="-main-show-page-container">
                <div className='sp-nav'>
                    <Nav formType={this.props.formType}
                        currentUser={this.props.currentUser}
                        logout={this.props.logout}/>
                </div>
                <div className="sp-image-container">
                </div>
                <div className="business-sp-info">
                    {/* <h1 className="sp-title">{this.props.business.name}</h1> */}
                </div>
                <div className="sp-body">
                    <div className="sp-body-left">
                    </div>
                    <div className="sp-body-right">
                    </div>
                </div>
            </div>
        )
    }
};

export default BusinessShow;