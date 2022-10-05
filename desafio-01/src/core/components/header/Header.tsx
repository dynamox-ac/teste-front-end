import './Header.css';
import logo from './logo-dynamox.png';



function Header() {

  return (
    <header className="nav">
   <div className="row mb-3 me-0"> 
    <div className="col-4 logo-container">
    <img src={logo} alt="logo" className='me-0 logo' />
    </div>
    <div className="col-7">
      <div className="nav-btn">
      <a href="">DynaPredict</a>
      <a href="">Sensores</a>
      <a href="">Contato</a>
      </div>
    </div>
   </div>
    </header>
  )
}

export default Header