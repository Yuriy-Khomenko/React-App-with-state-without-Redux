import React, { useContext } from 'react';
import TodoContent from '../components/TodoContent.js';
import selectors from '../selectors';
import { StateContext } from '../store';

const { getDoneTodos } = selectors;

const TodoContentContainer = (props) => {
  const { state } = useContext(StateContext);

  return (
    <TodoContent
      {...props}
      todos={getDoneTodos(state)}
    />
  )
}

export default TodoContentContainer;
