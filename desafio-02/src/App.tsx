import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './data/context/Authcontext';
import PrivateRoutes from './routes/private.routes';
import PublicRoutes from './routes/public.routes';


function App() {
  const { auth } = useContext(AuthContext);
  return auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;
