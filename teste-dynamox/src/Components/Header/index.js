/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { HeaderDiv, Logo, Row, Link } from './styles';
import logo from '../../img/logo-dynamox.png'

/* --------------------------------- EXPORTS ---------------------------------*/
export default function Header() {
  return (
    <HeaderDiv>
      <a href="https://dynamox.net/"><Logo src={logo} alt="" onClick /></a>
      <Row>
        <Link href="https://dynamox.net/dynapredict/">DynaPredict</Link>
        <Link href="#sec1">Sensores</Link>
        <Link href="#sec2">Contato</Link>
      </Row>
      
    </HeaderDiv>
  );
}