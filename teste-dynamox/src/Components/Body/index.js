/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { Background, Title, Image } from './styles';
import body from '../../img/grafismo.png';
import pc from '../../img/desktop-and-mobile.png';
import dyna from '../../img/logo-dynapredict.png';


/* --------------------------------- EXPORTS ---------------------------------*/
export default function Body() {
  return (
    
      <Background style={{ backgroundImage: `url(${body})` }}>
        
          <Title>
            <h1>Solução DynaPredict</h1>
            <img src={dyna} alt="" />
          </Title>
          <Image src={pc} alt=""/> 
        
      </Background>
    
  );
}