import { useState, useEffect, createContext } from 'react';
import AxiosClient from '../middelware/AxiosClient';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const name = 'Hola mundo'

  return (
    <AuthContext.Provider
      value={{
        name,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
