
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './core/components/footer/Footer';
import Header from './core/components/header/Header';
import CompanyPresentation from './core/views/company-presentation/Company-presentation';
import ProductPresentation from './core/views/product-presentation/product-presentation';


function App() {
  return (
    <div className="main">
      <Header></Header>
      <CompanyPresentation></CompanyPresentation>
      <ProductPresentation></ProductPresentation>
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
