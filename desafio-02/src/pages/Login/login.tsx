import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../data/context/Authcontext';
import './login.css';

const Login = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");


  const { setAuth, auth } = useContext(AuthContext)
  console.log('auth', auth);
  
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email === 'cauefranscis@gmail.com' && password === '12345') {
      setAuth(true);
      navigate('/home');
      window.alert('logado com sucesso')
    }
    else {
      window.alert("dados inseridos incorretos, tente novamente!")
    }
    console.log(`submit`, { email, password });
  }
  return <div className="login-container" id="login">
    <h1 placeholder="title">Login do sistema</h1>
      <div className="row">

        <form className='form-style' onSubmit={handleSubmit}>

          <div className="col field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(event) => setEmail(event?.target.value)}/>
          </div>
          <div className=" col field">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={(event) => setPassword(event?.target.value)}/>
          </div>
          <div className="col actions">
            <button className='btn-login' type="submit">Entrar</button>
          </div>
      
        </form>

      </div>
  </div>
}

export default Login;