import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import NewProduct from '../pages/Home/add-product/new-product';
import Home from '../pages/Home/home';



const PrivateRoutes = () => {


  return(
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/cadastrar' element={<NewProduct />} />
        <Route path='/editar/:id' element={<NewProduct />} />
      </Routes>
    </Router>
    
  );
};

export default PrivateRoutes