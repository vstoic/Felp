import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.login(user)
        // .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Login to FELP!
                    <br />
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="login-submit" type="submit" value={this.props.formType} />
                    </div>

                    <p id="signup-redirect">New to Felp? <Link to="/signup">Sign Up</Link>.</p>
                </form>
            </div>
        );
    }
}

export default Login;