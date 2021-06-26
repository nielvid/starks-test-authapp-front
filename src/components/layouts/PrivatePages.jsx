import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthState } from '../../state/store.js';

export default function PrivatePages({ children, path, exact }) {
  const authstate = useContext(AuthState);

  if (!authstate) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Route exact={exact} path={path}>
        {children}
      </Route>
    </>
  );
}
