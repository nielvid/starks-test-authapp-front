import { AES } from 'crypto-js';
import React, { useReducer, useEffect } from 'react';
import { AuthState } from './store.js';
import { Reducer, initialstate } from './reducers.js';

const AuthProvider : React.FC<{children: any}> = ({ children }) => {
  const [authstate, dispatch] = useReducer(Reducer, initialstate);

  useEffect(() => {
    if (!authstate) {
      localStorage.setItem('auth', '');
    } else {
      const ciphertext = AES.encrypt(
        JSON.stringify(authstate),
        'djdjdj',
      ).toString();

      localStorage.setItem('auth', ciphertext);
    }
  }, [authstate]);
  return (
    <AuthState.Provider value={{ authstate, dispatch }}>
      {children}
    </AuthState.Provider>
  );
};

export default AuthProvider;
