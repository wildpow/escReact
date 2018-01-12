import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Naverson = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  padding-top: 10px;
`
const StyledLink = styled(NavLink)`
  color: white;
  background-color: #1565c0;
  font-size: 1.6rem;
  padding: 5px 30px 10px 30px;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-top: 2px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all .25s ease-in;
  font-variant: small-caps;
  display: flex;
  justify-content: center;
  justify-self: center;
  justify-items: center;
  letter-spacing: .25rem;
  
  &:hover {
    color: white;
    background-color: #c62828;
  }
  &.active {
    background-color: #c62828;
    transform: scale(1.1);
  }  
    `
// const activeLink = {
// backgroundColor: '#c62828',
// transform: 'scale(1.1)'
// }
const Nav = () => {
  return (
    <Naverson>
      
        <StyledLink 
          to="/"
          exact
          >home
        </StyledLink>
        <StyledLink to="/about">about us</StyledLink>
        <StyledLink to="/products">products</StyledLink>
        <StyledLink to="/blog">blog</StyledLink>
     
      
    </Naverson>
  )
}

export default Nav;