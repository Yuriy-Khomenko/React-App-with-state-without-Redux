export const ADD_TODO = 'ADD_TODO';
export const GET_TODO = 'GET_TODO';
export const CHANGE_DONE = 'CHANGE_DONE';
export const ONLY_DONE_TODOS = 'ONLY_DONE_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const TODOS_FROM_JSONPLACEHOLDER = 'TODOS_FROM_JSONPLACEHOLDER';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    name: newTodo,
    id: new Date().getTime()
  }
}

export const changeStatus = (id, status) => {
  return {
    type: CHANGE_DONE,
    id,
    status
  }
}

export const getOnlyNotDoneTodos = () => {
  return {
    type: ONLY_DONE_TODOS
  }
}

export const removeTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const addTodoFromJsonplaceholder = (text) => {
  return async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    let json;
    if (response.ok) {
      json = await response.json();
    } else {
      alert("Error HTTP: " + response.status);
    }
    const convertTodos = json.map(({ id, title, completed }) => ({ id, name: title, done: completed }))

    dispatch({
      type: TODOS_FROM_JSONPLACEHOLDER,
      todos: convertTodos
    })
  }
}
