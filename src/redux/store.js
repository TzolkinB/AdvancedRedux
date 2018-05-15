import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './users';
import authenticationReducer from './authentication';

const reducers = {
  users: userReducer,
  authenticated: authenticationReducer,
};

const store = createStore(
  combineReducers(reducers)
)

export default store;
