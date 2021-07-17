import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import signin from './signin/reducer'

const logger = createLogger();

const initialState = { signin: false };

const store = createStore(signin, initialState, applyMiddleware(logger));

export default store;