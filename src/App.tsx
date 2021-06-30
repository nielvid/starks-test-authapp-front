import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageWrapper from './components/layouts/OpenWrapper';
import PrivatePages from './components/layouts/PrivatePages.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword.jsx';
import Dashboard from './components/pages/Dashboard';
import AuthProvider from './state/AuthProvider';

function App() {
  return (
    <>

      <PageWrapper>
        <AuthProvider>
          <ToastContainer />
          <Router>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>

              <Route exact path="/password-reset">
                <ForgetPassword />
              </Route>
              <PrivatePages exact path="/home">
                <Dashboard />
              </PrivatePages>
            </Switch>
          </Router>
        </AuthProvider>
      </PageWrapper>

    </>
  );
}

export default App;
