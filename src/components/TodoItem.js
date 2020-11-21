import React from 'react';
import styled from 'styled-components';

const TodoItem = (props) => {
    const { todo, removeTodo, changeStatus } = props;
    const { name, done, id } = todo;

    function toggleStatusTodo(e) {
        changeStatus(id, e.target.checked);
    }
    return (
        <StyledTodoItem>
            <div>
                {props.index}
            </div>
            <input onChange={toggleStatusTodo} type="checkbox" checked={done} />
            <div className="todoText"
                style={done ? { textDecoration: 'line-through' } : {}}>
                {name}
            </div>
            <button className="butDelete" onClick={() => removeTodo(id)}>
                delete
            </button>
        </StyledTodoItem>
    );
};

export default TodoItem;

const StyledTodoItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 4rem;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 1.3rem;
border: 2px solid #000;
border-radius: 10px;
width: 70%;

.butDelete{
    width: 120px;
    height: 40px;
    background-color: #DC3545;
    border-radius: 10px;
    font-size: 1.3rem;
}`;
