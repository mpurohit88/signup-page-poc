import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import signin from './signin/reducer'
import user from './user/reducer'

const reducer = combineReducers({
  signin: signin,
  user: user
});

const logger = createLogger();

const initialState = { signin: { isLoggedIn: false }, user: {} };

const store = createStore(reducer, initialState, applyMiddleware(logger));

export default store;