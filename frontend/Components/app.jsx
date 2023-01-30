import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./SessionForm/loginFormContainer";
import SignupFormContainer from "./SessionForm/signupFormContainer";
import { AuthRoute, ProtectedRoute} from '../Util/route_util'
import SplashContainer from './Splash/splashContainer';
import BusinessShowContainer from "./Business/businessShowContainer";
import BusinessIndexContainer from "./Business/businessIndexContainer";
import ReviewFormContainer from './Review/reviewFormContainer';
import EditReviewContainer from './Review/editReviewContainer';

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

