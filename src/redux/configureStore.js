import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { testMiddleware } from '../utils/testMiddleware';
import reducer from '../reducers';

const configureStore = (initialState, hooks) => {
  const middlewares = [thunk, testMiddleware(hooks)];
  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};

export default configureStore;
