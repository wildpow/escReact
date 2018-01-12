import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid black;
 
`
const HomeComponent = () => {
  return(
    <Main>
      <h1>This is the Home Component</h1>
    </Main>
  )
}
export default HomeComponent;