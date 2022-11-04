import { combineReducers } from 'redux';
import BusinessesReducer from './business_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer  = combineReducers({
    users: UsersReducer,
    businesses: BusinessesReducer
});
export default entitiesReducer;