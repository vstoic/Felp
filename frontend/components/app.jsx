import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute} from '../util/route_util'
import SplashContainer from './splash/splash_container';
import BusinessShowContainer from "./business/business_show_container";
import BusinessIndexContainer from "./business/business_index_container";
import ReviewFormContainer from './reviews/review_form_container';
// import UpdateReviewContainer from './reviews/update_review_container';

const App = () => (
    <div>
        <Switch> 
            {/* <Route path="/business/:businessId/review/:reviewId" component={UpdateReviewContainer}/> */}
            <Route exact path="/business/:businessId/review/new" component={ReviewFormContainer} />
            <Route path="/business/:businessId" component={BusinessShowContainer} />
            <Route path="/businesses" component={BusinessIndexContainer} />   
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;

