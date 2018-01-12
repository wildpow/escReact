import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: -18px;

  @media (min-width: 768px) {
    margin-top: -35px;
  }
`
export const Image = styled.img`
  /* z-index: 1000; */
  align-self: center;
  height: 6.5em;
  @media (min-width: 500px) { height: 8em; }
  @media (min-width: 768px) { height: 12em; }
`
export const H1 = styled.h1`
  z-index: -1;
  align-self: center;
  margin-top: -26px;
  margin-bottom: 0;
  color: #c62828;
  font-size: 1.6rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  padding: 5px 15px 5px 15px;

  @media (min-width: 500px) { font-size: 2.5rem; margin-top: -32px; }
  @media (min-width: 768px) { font-size: 4rem; margin-top: -47px; }
`
export const Span = styled.span`
  color: #1565c0;
  font-style: italic;
`