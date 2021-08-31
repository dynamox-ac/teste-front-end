/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';

import { Section } from './styles.js';


/* --------------------------------- EXPORTS ---------------------------------*/
export default function Footer() {
  return (
    
      <Section id="sec2">
        <p>Ficou com dúvida?</p>
        <p>Nós entramos em contato com você</p>

        <input type="text" id="fname" name="fname" placeholder="Como gostaria de ser chamado?" />
        <input type="text" id="company" name="company" placeholder="Em qual empresa você trabalha?" />
        <input type="text" id="email" name="email" placeholder="Digite aqui o seu email" />
        <input type="text" id="phone" name="phone" placeholder="Qual o seu telefone?" />
        
        <button>ENVIAR</button>
      </Section>
    
  );
}