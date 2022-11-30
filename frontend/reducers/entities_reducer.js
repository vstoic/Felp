import { combineReducers } from 'redux';
import BusinessesReducer from './business_reducer';
import UsersReducer from './users_reducer';
import ReviewsReducer from './review_reducer';

const entitiesReducer  = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer,
    reviews: ReviewsReducer
});
export default entitiesReducer;