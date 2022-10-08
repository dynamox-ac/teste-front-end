import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../pages/Home/home';



const PrivateRoutes = () => {

  return(
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
    
  );
};

export default PrivateRoutes