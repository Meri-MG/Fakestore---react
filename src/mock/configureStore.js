// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../redux/configureStore';

const reducer = combineReducers({
  productsReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
