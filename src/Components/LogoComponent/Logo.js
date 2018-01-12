import React from 'react';
import logo from './logo.png';
import { Header, Image, H1, Span} from './LogoStyles.js';


const Logo = () => {
  return (
    <Header>
      <Image src={logo}/>
      <H1><Span>E.S.C.</Span> Mattress Center </H1>
    </Header>
  )
}

export default Logo;