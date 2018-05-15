import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, applyMiddleware, combineReducers
} from 'redux';

import userReducer           from './users';
import authenticationReducer from './authentication';
import countyReducer from './counties';

const reducers = {
  users: userReducer,
  authenticated: authenticationReducer,
  counties: countyReducer
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;
