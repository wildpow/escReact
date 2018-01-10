import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Route } from 'react-router-dom';
import Logo from './Components/LogoComponent/Logo.js';
import './main.css';
import Nav from './Components/Nav.js'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  
  @media (min-width: 1200px) { width: 1170px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 768px) { width: 750px; }
`

function HomeComponent() {
 return <h1>This is the Home Component</h1>
}
function AboutComponent() {
  return <h2>This is the About Component</h2>
}
function ProductsComponent() {
  return <h1>This is the Products Component</h1>
}
function BlogComponent() {
  return <h2>This is the Blog Component</h2>
}
class App extends Component {
  render() {
    return (
      <Container>
        <ReactCSSTransitionGroup
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Logo />
       
        
          <div>
           <Nav/>

            <Route path="/" component={HomeComponent} exact/>
            <Route path="/about" component={AboutComponent} />
            <Route path="/products" component={ProductsComponent} />
            <Route path="/blog" component={BlogComponent} />

          </div>
          </ReactCSSTransitionGroup>
      </Container>
    );
  }
}

export default App;
