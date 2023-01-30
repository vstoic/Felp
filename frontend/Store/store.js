import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers/root_reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)
    )
);
export default configureStore;