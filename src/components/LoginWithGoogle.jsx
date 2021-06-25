import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginWithGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      ,
    </>
  );
};

export default LoginWithGoogle;
