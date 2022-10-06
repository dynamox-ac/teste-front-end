import './footer.css';

export default function Footer() {
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
          <div className="align">
          <input type="text" placeholder='Como gostaria de ser chamado?' id="name" />
          <input type="text" placeholder='Em qual empresa você trabalha?' id="compay" />
          <input type="email" placeholder='Digite aqui o seu email' id="email" />
          <input type="phone" placeholder='Qual o seu telefone?' id="phone" />
          </div>
        <div className="col-xl-12 col-sm m-0 p-0 mb-5 mt-3">
        <button className='btn-send'>Enviar</button>
        </div>
        </div>
      </div>
    </footer>
  )
}
