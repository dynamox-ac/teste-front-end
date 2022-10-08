import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Home from '../pages/Home/home';
import Login from '../pages/Login/login';



const PublicRoutes = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>

  );
};

export default PublicRoutes

