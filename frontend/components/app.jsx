import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SplashContainer from './splash/splash_container';
import BusinessShowContainer from "./business/business_show_container";
import BusinessIndexContainer from "./business/business_index_container";



const App = () => (

    <div>
        <Switch> 
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path='/business' component={BusinessIndexContainer} />   
            <Route path='/business/:businessId' component={BusinessShowContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;

