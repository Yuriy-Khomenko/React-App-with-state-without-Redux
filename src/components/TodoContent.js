import React from 'react';
import TodoItem from '../containers/TodoItem';
import styled from 'styled-components';

const TodoContent = (props) => {
    const { todos } = props;

    return (
        <StyledTodoContent>
            {todos.map((todoItem) => <TodoItem key={todoItem.id} todo={todoItem} />)}
        </StyledTodoContent>
    );
};

export default TodoContent;


const StyledTodoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
