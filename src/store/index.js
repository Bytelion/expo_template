import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
    // predicate removes action types from being logged in the console
    predicate: (getState, action) => action.type !== 'SET_REQUEST_PENDING',
  });

  middleware.push(logger);
}

const rootReducer = combineReducers({
  ...reducers,
});

export default createStore(rootReducer, applyMiddleware(...middleware));
