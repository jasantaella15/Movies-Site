import React from 'react';
import styled from 'styled-components';

  const Line  = styled.div`  
  width: 35px;
  height: 5px;
  background-color: ${props=> props.theme.primary};
  margin: 6px 0;

  &:hover{
    
  background-color: ${props=> props.theme.secundary};
  }
`;
export default Line