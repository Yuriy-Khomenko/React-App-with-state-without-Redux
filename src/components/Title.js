import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <StyledTitle>
      <div>
        <h3>React App with State + middleware (without Redux)</h3>
      </div>
    </StyledTitle>
  );
};

const StyledTitle = styled.h3`
border-bottom: 1px solid #868686;
margin-bottom: 10px;`;

export default Title;
