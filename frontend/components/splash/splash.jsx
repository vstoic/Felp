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
                            <img className='business-splash-photo' src='https://s3-media0.fl.yelpcdn.com/bphoto/97rTZhO_KH51AMDZ50Gpqg/o.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Very Fresh Noodles</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>342 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/SsGSSGy3/rubys.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Rubirosa</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>92 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/hj8LKNQn/sd-c.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>Southdown Coffee</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'> 42 Reviews</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/business/1' className='splash-business-container'>
                            <img className='business-splash-photo' src='https://i.postimg.cc/zv0TgWkP/our-collection.jpg'></img>
                            <div className='business-splash-info'>
                                <p className='business-splash-title'>The Uncommons</p>
                                <div className='hot-new-info-rating-container-2'>
                                    <p className='splash-review'></p>
                                    <p className='splash-review-count'>82 Reviews</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <br />
                    <Link to='/business'>All Businesses</Link>
                    <footer className='splash-footer'></footer>
                </div>
            </div>
        )
    }
}

export default Splash;