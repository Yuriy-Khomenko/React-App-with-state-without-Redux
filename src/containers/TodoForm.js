import React, { useContext } from 'react';
import { addTodo, getOnlyNotDoneTodos, addTodoFromJsonplaceholder } from '../actions';
import TodoForm from '../components/TodoForm';
import { StateContext } from '../store';

const TodoFormContainer = (props) => {
  const { dispatch } = useContext(StateContext);

  return (
    <TodoForm
      {...props}
      addTodo={(newTodo) => dispatch(addTodo(newTodo))}
      getOnlyNotDoneTodos={() => dispatch(getOnlyNotDoneTodos())}
      addTodoFromJsonplaceholder={() => dispatch(addTodoFromJsonplaceholder())}
    />
  )
}

export default TodoFormContainer;
