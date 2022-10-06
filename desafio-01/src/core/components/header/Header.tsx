import './Header.css';
import logo from './logo-dynamox.png';



function Header() {

  return (
    <header className="nav">
   <div className="row mb-3 me-0"> 
    <div className="col-xl-4 col-sm logo-container">
      <a href="https://dynamox.net/"><img src={logo} alt="logo" className='me-0 logo' /></a>
    </div>
    <div className="col-xl-7 col-sm">
      <div className="nav-btn">
      <a className='btn-link' href="https://dynamox.net/dynapredict/">DynaPredict</a>
      <a className='btn-link' href="#sensors">Sensores</a>
      <a className='btn-link' href="#footer">Contato</a>
      </div>
    </div>
   </div>
    </header>
  )
}

export default Header