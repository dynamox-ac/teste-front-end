import { createContext, useState } from 'react';
import { IProps } from '../../interface/props.interface';

export const AuthContext = createContext<string | boolean | any>(null);

function AuthProvider ({children}: IProps) {

  const[auth, setAuth]=useState(false);
  const email = "cauefranscis@gmail.com";
  const senha = 12345;

  return (
    <AuthContext.Provider value={{auth, setAuth, email, senha}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;