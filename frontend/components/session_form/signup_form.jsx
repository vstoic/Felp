import React from 'react';
import { Link } from 'react-router-dom';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }


    render() {
        const errors = this.props.errors;
        return (
            <div className='signup-page'>
                <div className='signup-nav'>
                    <Link to="/"><img className="signup-logo"
                        src="https://i.postimg.cc/1RD4Mg5c/felp-logo.png" />
                    </Link>
                </div>     
                <div className='signup-form'>    
                    <div className="signup-form-container">
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <div>
                                <h1>Sign Up for Felp</h1>
                                <h2>Connect with great local businesses</h2>
                                <h3>By continuing, you agree that felp is just a clone </h3>
                            </div>
            
                                <hr className="hr1"></hr>
                                <div className="signup-input">
                                    <br />
                                    <label>
                                        <input type="text"
                                        placeholder='  Username'
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                            className="signup-username"
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="email"
                                        placeholder='  Email'
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            className="signup-email"
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        <input type="password"
                                        placeholder='  Password'
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="signup-password"
                                        />
                                    </label>
                                    <br />
                                    <button className="signup-submit" type="submit" value={this.props.formType}>Log In</button>
                                    
                                </div>

                                <p className="login-redirect">Already on Felp? <Link to="/login">Log In</Link>.</p>

                            </form>
                                
                                <img className="login-image" src="https://i.postimg.cc/MHgtrPsb/signup-illustration.png" />
                        
                        </div>
                    </div>
                </div>
        );
    }
}

export default Signup;