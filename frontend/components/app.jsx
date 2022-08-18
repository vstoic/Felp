import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SplashContainer from './splash/splash_container';

const App = () => (

    <div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SplashContainer} />
    </div>
);

export default App;