import computer from './../../../assets/imgs/desktop-and-mobile.png';
import logo from './../../../assets/imgs/logo-dynapredict.png';
import './dynapredict.css';

export default function DynaPredict() {
  return (
    <main  className='content-company w-100'>

      <div className="row bg-img">

        <div className="col-xl-4 col-sm headline">
          <h1 className='text-solution'>Solução</h1>
          <h1 className='text-solution'>DynaPredict</h1>
          <img className='dynapredict' src={logo} alt="DynaPredict" />
        </div>

        <div className="col-xl-7 col-sm">
          <img className="computer" src={computer} alt="Web and Mobile" />
        </div>

      </div>

    </main>
  )
}
