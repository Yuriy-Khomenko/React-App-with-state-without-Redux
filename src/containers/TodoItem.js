import React, { useContext } from 'react'
import TodoItem from '../components/TodoItem';
import { StateContext } from '../store';
import { removeTodo, changeStatus } from '../actions';

const TodoItemContainer = (props) => {
  const { dispatch } = useContext(StateContext);

  return (
    <TodoItem
      {...props}
      removeTodo={(id) => dispatch(removeTodo(id))}
      changeStatus={(id, status) => dispatch(changeStatus(id, status))}
    />
  )
}

export default TodoItemContainer;
