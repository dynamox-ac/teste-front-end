import computer from './../../../assets/imgs/desktop-and-mobile.png';
import logo from './../../../assets/imgs/logo-dynapredict.png';
import './Company-presentation.css';

export default function CompanyPresentation() {
  return (
    <main  className='content-company'>
      <div className="row bg-img">
        <div className="col-4 headline">
          <h1 className=''>Solução</h1>
          <h1>DynaPredict</h1>
        <img className='dynapredict' src={logo} alt="" />
        </div>
        <div className="col-7">
          <img className="computer" src={computer} alt="" />
        </div>
      </div>
    </main>
  )
}
