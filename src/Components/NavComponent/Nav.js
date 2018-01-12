import React from 'react';
import { NavContainer, StyledLink } from './NavStyles.js'

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink 
        to="/"
        exact
        >home
      </StyledLink>
      <StyledLink to="/about">about us</StyledLink>
      <StyledLink to="/products">products</StyledLink>
      <StyledLink to="/blog">blog</StyledLink> 
    </NavContainer>
  );
};

export default Nav;