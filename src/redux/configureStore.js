// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import herosReducer from './heros/reducer';

const reducer = combineReducers({ herosReducer });

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
