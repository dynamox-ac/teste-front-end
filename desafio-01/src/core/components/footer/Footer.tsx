import { useState } from 'react';
import './footer.css';

 function Footer() {

    const[name, setName]=useState("");
    const[company, setCompany]=useState("");
    const[email, setEmail]=useState("");
    const[phone, setPhone]=useState("");

     const handleSubmit=(e: any)=> {
      e.preventDefault();
      console.log(name, company, email, phone);
      const data={name, company, email, phone};
      if(name && company && email && phone){
        const info = `Nome: ${data.name} || Empresa: ${data.company} || Email: ${data.email} || Phone: ${data.phone}`
        alert(info);
      }
    }

  return (
    <footer className='text-align footer' id='footer'>

      <div className="row">

        <div className="col-12 text mt-5">
          <div className="text">
          <h2>Ficou com dúvida?</h2>
          <h2>Nós entramos em contato com você</h2>
          </div>
        </div>

        <div className="col-xl-12 col-sm mb-3">  
          <form onSubmit={handleSubmit}>

            <div className="align">
              <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder='Como gostaria de ser chamado?' id="name"/>
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value) } placeholder='Em qual empresa você trabalha?' />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder='Digite aqui o seu email' id="email" />
              <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value) } placeholder='Qual o seu telefone?' id="phone" />
            </div>
            
            <div className="col-xl-12 col-sm m-0 p-0 mb-5 mt-3">
              <button className='btn-send'>Enviar</button>  
            </div>

          </form>
        </div>
      </div>

    </footer>

  )
 }


 export default Footer;