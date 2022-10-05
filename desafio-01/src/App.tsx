
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './core/components/footer/Footer';
import Header from './core/components/header/Header';
import DynaPredict from './core/views/dynapredict/dynapredict';
import Sensors from './core/views/sensors/sensors';


function App() {
  return (
    <div className="main">
      <Header></Header>
      <DynaPredict></DynaPredict>
      <Sensors></Sensors>
      <Footer></Footer>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
