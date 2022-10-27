import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute} from '../util/route_util'
import SplashContainer from './splash/splash_container';
import BusinessShowContainer from "./business/business_show_container";
import BusinessIndexContainer from "./business/business_index_container";

const App = () => (
    <div>
        <Switch> 
            <Route path='/business/:businessId' component={BusinessShowContainer} />
            <Route path='/business' component={BusinessIndexContainer} />   
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;

