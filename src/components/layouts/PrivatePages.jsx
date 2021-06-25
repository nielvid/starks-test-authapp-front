import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivatePages({ children, path, exact }) {
  const Authstate = 'abc';

  if (Authstate !== 'abd') {
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
