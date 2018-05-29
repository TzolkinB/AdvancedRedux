import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, applyMiddleware, combineReducers
} from 'redux';

import usersReducer          from './users';
import userReducer           from './activeUser';  
import authenticationReducer from './authentication';

const reducers = {
  users: usersReducer,
  user: userReducer,
  authenticated: authenticationReducer
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;
