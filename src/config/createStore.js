import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

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
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ?
    window.devToolsExtension() : f => f
  )
);

export default store;
