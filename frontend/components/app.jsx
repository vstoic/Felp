import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./SessionForm/LoginFormContainer";
import SignupFormContainer from "./SessionForm/SignupFormContainer";
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import SplashContainer from './splash/splashContainer';
import BusinessShowContainer from "./Business/BusinessShowContainer";
import BusinessIndexContainer from "./Business/BusinessIndexContainer";
import ReviewFormContainer from './review/ReviewFormContainer';
import EditReviewContainer from './review/EditReviewContainer';

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

