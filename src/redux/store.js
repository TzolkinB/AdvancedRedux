import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {
  createStore, applyMiddleware, combineReducers
} from 'redux';

import usersReducer          from './users';
import authenticationReducer from './authentication';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const reducers = {
  users: usersReducer,
  authenticated: authenticationReducer
};

const pReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

export const store = createStore(
  pReducer,
  applyMiddleware(thunk, logger)
);

export const persistor = persistStore(store);
