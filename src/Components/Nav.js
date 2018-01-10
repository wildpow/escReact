import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Naverson = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
  border: 2px solid black;
  padding: 20px;
`

const Nav = () => {
  return (
    <Naverson>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/products">Products</Link>
      <Link to="blog">Blog</Link>
    </Naverson>
  )
}

export default Nav;