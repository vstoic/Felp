import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./sessionForm/loginFormContainer";
import SignupFormContainer from "./sessionForm/signupFormContainer";
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import SplashContainer from './splash/splashContainer';
import BusinessShowContainer from "./business/businessShowContainer";
import BusinessIndexContainer from "./business/businessIndexContainer";
import ReviewFormContainer from './review/reviewFormContainer';
import EditReviewContainer from './review/editReviewContainer';

const App = () => (
    <div>
        <Switch> 
            <ProtectedRoute path="/business/:businessId/review/:reviewId/edit" component={EditReviewContainer}/>
            <ProtectedRoute exact path="/business/:businessId/review/new" component={ReviewFormContainer} />
            <Route path="/business/:businessId" component={BusinessShowContainer} />
            <Route path="/businesses" component={BusinessIndexContainer} />   
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;

