import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoContent from './containers/TodoContent';
import TodoForm from './containers/TodoForm';
import styled from 'styled-components';
import Store from './store';

const App = (props) => {
  return (
    <Store>
      <StyledApp className="App">
        <header>
          <Title />
        </header>
        <div>
          <TodoForm />
          <TodoContent />
        </div>
      </StyledApp>
    </Store>
  );
};

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
