/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Section } from './styles.js';


/* --------------------------------- EXPORTS ---------------------------------*/
export default function Footer() {
  function handleSubmit(data) {
    alert(data.fname + ", " + data.company + ", " + data.email + ", " + data.phone + ".");
  }
  return (
    
      <Section id="sec2">
        <p>Ficou com dúvida?</p>
        <p>Nós entramos em contato com você</p>

        <Form onSubmit={handleSubmit}>
          <Input type="text" id="fname" name="fname" placeholder="Como gostaria de ser chamado?" />
          <Input type="text" id="company" name="company" placeholder="Em qual empresa você trabalha?" />
          <Input type="text" id="email" name="email" placeholder="Digite aqui o seu email" />
          <Input type="text" id="phone" name="phone" placeholder="Qual o seu telefone?" />
          
          <button type="submit">ENVIAR</button>
        </Form>

      </Section>
    
  );
}