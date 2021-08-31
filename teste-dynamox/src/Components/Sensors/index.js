/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { Section, Row, Img } from './styles.js';
import af from '../../img/sensor-af.png';
import hf from '../../img/sensor-hf.png';
import tca from '../../img/sensor-tca.png';


/* --------------------------------- EXPORTS ---------------------------------*/
export default function Sensors() {
  return (
    
      <Section>
        <h1>Sensores para Manutenção Preditiva</h1>
        <p>Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e
temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway,
registrando os dados monitorados em sua memória interna. Por conexão internet esses dados
são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão.</p>
        <button>VER MAIS</button>
        <Row>
          <Img>
            <img src={tca} alt="" />
            <p>TcA+</p>
          </Img>
          <Img>
            <img src={af} alt="" />
            <p>AS</p>
          </Img>
          <Img>
            <img src={hf} alt=""/>
            <p>HF</p>
          </Img>
        </Row>
      </Section>
    
  );
}