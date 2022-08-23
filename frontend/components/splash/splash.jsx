import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/nav'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.clearErrors = this.clearErrors.bind(this)
    }

    clearErrors(e) {
        this.props.clearErrors()
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className='splash-main'> 
                    <div className='splash-nav'>
                        <Nav formType={this.props.formType} 
                        currentUser={this.props.currentUser} 
                        logout={this.props.logout} />
                    </div>
                    <img className="splash-background" src="https://i.postimg.cc/t70MBSqy/o.jpg" />
                    <footer className='splash-footer'>
                    </footer>
                </div> 
                    
                <div className='filler'>
                    {/* <div className='business-splash-container'> */}
                        <Link to='/businesses/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/businesses/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>Reviews</p>
                                </div>
                            </div>
                        </Link>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Splash;