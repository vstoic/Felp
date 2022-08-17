import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (

    <div>
        <header>
            <h1>FELP!</h1>
            <GreetingContainer/>
        </header>
            {/* <Route exact path="/" component={SplashPage} /> */}
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>

);

export default App;