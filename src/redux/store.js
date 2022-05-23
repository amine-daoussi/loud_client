import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const configureStore = (initialState = {}) => {
  const logger = createLogger({ duration: true, timestamp: false, collapsed: true, diff: true });
  const middlewares = [logger];

  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default configureStore;
