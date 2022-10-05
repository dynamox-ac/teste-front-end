import sensorWhite from './../../../assets/imgs/sensor-af.png';
import sensorBlue from './../../../assets/imgs/sensor-hf.png';
import sensorYellow from './../../../assets/imgs/sensor-tca.png';
import './sensors.css';


const sensores = {
  title: "Sensores para Manutenção Preditiva",
  paragraph: "Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway, registrando os dados monitorados em sua memória interna. Por conexão internet esses dados são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão"
};

export default function Sensors() {
  return (
    <main className='content-product' id='sensors'>

      <div className="row">
        <div className="col sensors-content">

          <h1 className='title-sensors'>{sensores.title}</h1>

          <div style={{width:"75vw"}}>
            <p className='text-sensors mt-2'>{sensores.paragraph}</p>
          </div>

          <div className="col m-0 p-0 mb-3 mt-3">
            <button className='btn-more'>Ver mais</button>
          </div>

          <div className="row">
            <div className="tca col">
              <img className='sensors' src={sensorYellow} alt="TcA+" />
              <h4 className='title-sensors'>TcA+</h4>
            </div>

            <div className="as col">
              <img style={{width:'18vw'}} className='sensors' src={sensorWhite} alt="AS" />
              <h4 className='title-sensors'>AS</h4>
            </div>
            
            <div className="hf col">
              <img className='sensors' src={sensorBlue} alt="HF" />
              <h4 className='title-sensors'>HF</h4>
            </div>
            
          </div>
        </div>
      </div>
    </main>
      )
}
