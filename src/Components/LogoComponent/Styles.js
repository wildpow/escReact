import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: -13px;

  @media (min-width: 768px) {
    margin-top: -22px;
  }
`
export const Image = styled.img`
  z-index: 1000;
  align-self: center;
  max-height: 6.5em;

  @media (min-width: 768px) {
    max-height: 12em;
  }
`
export const H1 = styled.h1`
  align-self: center;
  margin-top: -26px;
  padding: 10px;
  text-shadow:0 0 1px transparent;
  color: #c62828;
  font-size: 1.6rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 12px;
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-top: -47px;
  }
`
export const Span = styled.span`
  color: #1565c0;
  font-style: italic;
`