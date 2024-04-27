import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './SessionForm/loginFormContainer';
import SignupFormContainer from './SessionForm/signupFormContainer';
import { AuthRoute, ProtectedRoute } from '../Util/route_util';
import SplashContainer from './Splash/splashContainer';
import BusinessShowContainer from './Business/businessShowContainer';
import BusinessIndexContainer from './Business/businessIndexContainer';
import ReviewFormContainer from './Review/reviewFormContainer';
import EditReviewContainer from './Review/editReviewContainer';
import Profile from './profile/profile';
import Layout from './Layout/Layout';
const App = () => (
  <div>
    <Switch>
      {/* specific routes */}
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* Business and review-related routes */}
      <Layout>
        <Switch>
          <ProtectedRoute
            path="/business/:businessId/review/:reviewId/edit"
            component={EditReviewContainer}
          />
          <ProtectedRoute
            exact
            path="/business/:businessId/review/new"
            component={ReviewFormContainer}
          />
          <Route
            path="/business/:businessId"
            component={BusinessShowContainer}
          />
          <Route path="/businesses" component={BusinessIndexContainer} />
          {/* profile route */}
          <Route path="/profile/:userId" component={Profile} />
          {/* most general route */}
          <Route exact path="/" component={SplashContainer} />
        </Switch>
      </Layout>
    </Switch>
  </div>
);

export default App;
