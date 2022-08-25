import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleDemo = this.handleDemo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
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
        this.props.login(user)
        .then(() => this.props.history.push('/'));
    }

    clearErrors(e) {
        this.props.clearErrors()
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    handleDemo(e) {
        e.preventDefault();
        const demo = {
            email: "Demo@demo.com",
            password: "demopassword"
        }
        const speed = 110;

        if (this.state.email !== demo.email) {
            const inputEmail = setInterval(() => {
                if (this.state.email !== demo.email) {
                    const temp = demo.email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp })
                } else {
                    clearInterval(inputEmail);
                    animatePW();
                }
            }, speed)
        }
        const animatePW = () => {
            if (this.state.password !== demo.password) {
                const inputPassword = setInterval(() => {
                    if (this.state.password !== demo.password) {
                        const temp = demo.password.slice(0, this.state.password.length + 1);
                        this.setState({ password: temp });
                    } else {
                        clearInterval(inputPassword);
                        this.props.login(demo).then(() => this.props.history.push('/'));
                    }
                }, speed);
            }
        }
    }

    render() {
    
        return (
        <div className='login-page'>
            <div className='login-nav'>
                    <Link to="/"><img className="login-logo"
                        src="https://i.postimg.cc/1RD4Mg5c/felp-logo.png" />
                    </Link>
            </div> 
            <div className='login-form'>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div>
                            <h1>Log in to Felp</h1>
                            <h2 className="signup-redirect-main">New to Felp? <Link to="/signup">Sign Up</Link>.</h2>
                            <h3>By logging in, you agree that felp is just a clone </h3>
                        </div>
                        
                        <button
                            className="demo-button-login"
                            onClick={this.handleDemo}>
                            Continue as Demo User
                        </button>

                        <hr className="hr1"></hr>

                        <div className="login-input">
                            <label>
                                <input type="email"
                                    placeholder='  Email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-email"
                                    />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    placeholder='  Password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-password"
                                    />
                            </label>
                            <br />
                                <button className="login-submit" type="submit" value={this.props.formType}>Log In</button>
                        </div>

                        <p className="signup-redirect">New to Felp? <Link to="/signup">Sign Up</Link>.</p>
                    </form>
                        <div className="login-image" >
                    <img src="https://i.postimg.cc/MHgtrPsb/signup-illustration.png" />
                    </div>
                </div>
                    {/* <div className='errors-container'>
                        <ul id="errors">
                            {errors}
                        </ul>
                    </div> */}
            </div>
        </div>
        );
        
    }
}

export default Login;