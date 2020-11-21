import React, { useState } from 'react';
import styled from 'styled-components';

const TodoForm = (props) => {
  const [nameTodo, changeNameTodo] = useState('');
  const { addTodo, getOnlyNotDoneTodos, addTodoFromJsonplaceholder } = props;

  const handleAddTodo = () => {
    const name = nameTodo.trim();
    if (name === '') {
      return;
    }
    addTodo(nameTodo);
    changeNameTodo('');
  }

  return (
    <div>
      <input className="inputForm"
        onChange={(e) => changeNameTodo(e.target.value)}
        type="text"
        value={nameTodo}
      />
      <button
        className="butForm"
        onClick={handleAddTodo}
      >
        + Add ToDo
            </button>
      <button
        className="butForm"
        onClick={addTodoFromJsonplaceholder}
      >
        + Add ToDos from jsonplaceholder
            </button>
      <div>
        only not done:
              <input
          onChange={(e) => { getOnlyNotDoneTodos(e.target.value) }}
          type="checkbox"
        />
      </div>
    </div>
  )
};

export default TodoForm;

const StyledTodoForm = styled.div`
margin: 20px 0 20px 0;
display: flex;
align-items: center;
justify-content: center;
.butForm{
    background: #28A745;
    width: 140px;
    height: 40px;
    border-radius: 0 10px 10px 0;
    font-size: 1.3rem;
}
.inputForm{
    border-radius: 10px 0 0 10px;
    height: 40px;
    width: 25rem;
    font-size: 1.3rem;
}`;
