import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../state/auth';
import { login } from "../state/userSlice"

const Login = () => {

  const [loginData, setLoginData] = useState({})
  const [error, setError] = useState({email: false, password: false})

  const dispatch = useDispatch()

  const signIn = () => {

    getUser(loginData.email, loginData.password).then((response) => {
      dispatch(login({
        email: response.email,
        token: response.token,
        loggedIn: true
     }))
     localStorage.setItem("auth", JSON.stringify({
      email: response.email,
      token: response.token
     }))
    }).catch(() => {
      setError({email: true, password: true})
    })
 }

  return (
    <>
      <section className="login">
        <div className="login-card">
          <h2>Login</h2>
          <form noValidate>
            <TextField
              error={error.email}
              id="standard-required"
              label="Email"
              value={loginData.email || ""}
              onChange={(ev) => { 
                setLoginData((prev) => ({ ...prev, email: ev.target.value })) 
                setError({email: false, password: false})
              }}
            />
            <TextField
              error={error.password}
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              value={loginData.password || ""}
              onChange={(ev) => { 
                setLoginData((prev) => ({ ...prev, password: ev.target.value })) 
                setError({email: false, password: false})
              }}
            />
            <Button variant="contained" color="primary" onClick={signIn}>
              Entrar
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login