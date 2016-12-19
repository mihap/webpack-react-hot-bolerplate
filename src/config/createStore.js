import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import currentUser from 'reducers/currentUser';

const rootReducer = combineReducers({
  currentUser
});

const middleware = [
  thunkMiddleware
];

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
