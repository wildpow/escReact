import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  padding-top: 10px;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  background-color: #1565c0;
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
  letter-spacing: .15rem;
  font-size: 1rem;
  padding: 5px 5px 5px 5px;

  &:hover {
    color: white;
    background-color: #c62828;
  }
  &.active {
    background-color: #c62828;
    transform: scale(1.1);
  }  
  @media (min-width: 412px) {
    font-size: 1.3rem;}
  @media (min-width: 536px) {
    padding: 5px 20px 10px 20px;
  }
  @media (min-width: 768px) {
    font-size: 1.6rem; padding: 5px 30px 10px 30px; }
`;