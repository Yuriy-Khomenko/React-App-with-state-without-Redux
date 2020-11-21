import React from 'react';
import reduxThunk from 'redux-thunk';
import { combineReducers, useStore } from '../storeUtils';
import rootReducer from '../reducers';

function logger() {
  return next => action => {
    console.log('ACTION: ', action);
    return next(action);
  }
}

const [reducer, initialStore] = combineReducers(rootReducer);
const middleware = [reduxThunk, logger];

export const StateContext = React.createContext({});

const Store = ({ children }) => {
  const [state, dispatch] = useStore(reducer, initialStore, middleware);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}

export default Store;





