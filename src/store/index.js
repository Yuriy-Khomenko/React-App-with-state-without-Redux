import React from 'react';
import reduxThunk from 'redux-thunk';
import { combineReducers } from '../storeUtils';
import rootReducer from '../reducers';

function logger() {
  return next => action => {
    console.log('ACTION: ', action);
    return next(action);
  }
}

export const [reducer, initialStore] = combineReducers(rootReducer);

export const middleware = [reduxThunk, logger];

export const StateContext = React.createContext({});
