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
            <div className='whitespace'>
                <div className='splash-main'> 
                    <div className='splash-nav'>
                        <Nav formType={this.props.formType} 
                        currentUser={this.props.currentUser} 
                        logout={this.props.logout} />
                    </div>
                    <img className="splash-background" src="https://images5.alphacoders.com/100/1001016.jpg" alt="https://i.postimg.cc/WpyWxXGK/1001016.jpg" />   
                    <div className='bg-text'>
                        <h1 className='bg-text-1'>Fake People. Fake Reviews.</h1>
                        <h2 className='bg-text-2'> Seek the best places to eat, shop, drink and do, well, whatever.</h2>
                    </div>
                </div> 
                <h1 className='business-splash-container-title'>Staff Favorites</h1>
                <div className='business-filler'>    
                    <div className='business-container'>
                        <Link to='/business/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://i.postimg.cc/q72Dk2X0/o-3.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Chong Qing Lao Zao</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>342 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://fastly.4sqi.net/img/general/600x600/69864456_BIpn7lgbRIO1A6ZLCZfb2B73R_i18QpytrXn2Bo1XwQ.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>The Uncommons</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>82 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://s3-media0.fl.yelpcdn.com/bphoto/iuJ_WYJkyM_eTu5KLZGESQ/o.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Starbucks</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'> 42 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                        <img className='business-splash-photo' src='https://www.jaimeemorse.com/wp-content/uploads/2021/02/JaimeeMorse-KellerWilliamsOffice-94.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Keller Williams</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>22 Reviews</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <footer className='splash-footer'></footer>
                </div>
            </div>
        )
    }
}

export default Splash;