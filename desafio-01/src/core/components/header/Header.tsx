import './Header.css';
import logo from './logo-dynamox.png';



function Header() {

  return (
    <header className="nav">
   <div className="row mb-3 me-0"> 
    <div className="col-4 logo-container">
      <a href="https://dynamox.net/"><img src={logo} alt="logo" className='me-0 logo' /></a>
    </div>
    <div className="col-7">
      <div className="nav-btn">
      <a href="https://dynamox.net/dynapredict/">DynaPredict</a>
      <a href="#sensors">Sensores</a>
      <a href="#footer">Contato</a>
      </div>
    </div>
   </div>
    </header>
  )
}

export default Header