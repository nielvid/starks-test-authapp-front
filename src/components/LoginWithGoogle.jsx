import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import { googleLogin } from '../queries/axios.config.js';

const LoginWithGoogle = ({ buttonText }) => {
  const responseGoogle = async (response) => {
    // console.log(response);
    const { profileObj } = response;
    try {
      const res = await googleLogin(profileObj);
      console.log(res);
      toast.success('Login Sucessful');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={buttonText}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      ,
    </>
  );
};

export default LoginWithGoogle;
