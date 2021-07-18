import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import auth from './auth/reducer'
import user from './user/reducer'

const reducer = combineReducers({
  auth: auth,
  user: user
});

const logger = createLogger();

const initialState = { auth: { isLoggedIn: false }, user: { profile: {} } };

const store = createStore(reducer, initialState, applyMiddleware(logger));

export default store;