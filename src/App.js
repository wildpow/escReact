import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Components/LogoComponent/Logo.js';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  
  @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }
`
class App extends Component {
  render() {
    return (
      <Container>
        <Logo />
      </Container>
    );
  }
}

export default App;
