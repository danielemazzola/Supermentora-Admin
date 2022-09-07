import { useState, useEffect, createContext } from 'react';
import AxiosClient from '../middelware/AxiosClient';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // Global
  const [message, setMessage] = useState({});
  // End Global

  // Users LOGIN - REGISTER - FORGET PASSWORD
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [password, setPassword]=useState('')
  const [repeatPasswor, setRepeatPassword]=useState('')
  const [registerData, setRegisterData] = useState({})


  // End Users LOGIN - REGISTER - FORGET PASSWORD

  return (
    <AuthContext.Provider
      value={{
        // User
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        repeatPasswor,
        setRepeatPassword,
        //End user


        message,
        setMessage,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
