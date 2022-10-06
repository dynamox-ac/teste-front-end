
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './core/components/footer/Footer';
import Header from './core/components/header/Header';
import DynaPredict from './core/views/dynapredict/dynapredict';
import Sensors from './core/views/sensors/sensors';


function App() {
  return (
    <div className="w-100 content">
      <Header></Header>
      <DynaPredict></DynaPredict>
      <Sensors></Sensors>
      <Footer></Footer>
    </div>
  );
}

export default App;
