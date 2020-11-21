import { useReducer, useRef, useEffect, useLayoutEffect } from 'react';

export const combineReducers = (reducers) => {
  const keys = Object.keys(reducers);
  const initStore = {};

  for (let i = 0; i < keys.length; i++) {
    initStore[keys[i]] = reducers[keys[i]]();
  }

  const combineReduce = (state = initStore, action = '') => {
    const newState = {};
    for (let i = 0; i < keys.length; i++) {
      newState[keys[i]] = reducers[keys[i]](state[keys[i]], action);
    }
    return newState
  }

  return [combineReduce, initStore];
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

  useLayoutEffect(() => {
    refStore.current.state = state;
  })

  return [state, refStore.current.dispatch];
}
