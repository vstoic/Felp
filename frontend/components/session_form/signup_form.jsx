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
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    Signup for FELP!
                    <br />
                        <div className="signup-form">
                            <br />
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Email:
                                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>

                        <p id="login-redirect">Already on Felp? <Link to="/login">Log In</Link>.</p>
                    </form>
                </div>
        );
    }
}

export default Signup;