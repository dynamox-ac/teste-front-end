/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { HeaderDiv, Logo, Row, Link } from './styles';
import logo from '../../img/logo-dynamox.png'

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Header() {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="" />
      <Row>
        <Link>DynaPredict</Link>
        <Link>Sensores</Link>
        <Link>Contato</Link>
      </Row>
      
    </HeaderDiv>
  );
}