import React, { useReducer, useRef, useEffect } from 'react';

export const combineReducers = (reducers) => {
  const keys = Object.keys(reducers);
  const initStore = {};

  for (let i = 0; i < keys.length; i++) {
    initStore[keys[i]] = reducers[keys[i]]();
  }

  const combinedReduces = (state = initStore, action = '') => {
    const newState = {};
    for (let i = 0; i < keys.length; i++) {
      newState[keys[i]] = reducers[keys[i]](state[keys[i]], action);
    }
    return newState
  }

  return [combinedReduces, initStore];
}

export const useStore = (rootReducer, initialStore, middleware = []) => {
  const [state, dispatch] = useReducer(rootReducer, initialStore);
  const refStore = useRef({
    state: state
  });

  if (!refStore.current.dispatch) {
    const getState = () => refStore.current.state;
    refStore.current.getState = getState;
    refStore.current.dispatch = middleware.reverse().reduce((midDispatch, item) =>
      item({ dispatch, getState })(midDispatch), dispatch);
  }

  useEffect(() => {
    refStore.current.state = state;
  })

  return [state, refStore.current.dispatch];
}

const Store = ({ children, context, reducer, initialStore = {}, middleware = [] }) => {
  const [state, dispatch] = useStore(reducer, initialStore, middleware);

  return (
    <context.Provider value={{ state, dispatch }}>
      {children}
    </context.Provider>
  )
}

export default React.memo(Store);
