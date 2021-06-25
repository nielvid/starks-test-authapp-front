import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Input from './Input.jsx';
import '../scss/components/Password.scss';

const ForgetPassword = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success('Check your email for reset link');
      history.push('/');
    } catch (error) {
      console.log(error);
      toast.error('Login failed');
    }
  };

  return (
    <>
      <div className="ss-pass-reset">
        <div className="wrapper">
          <h4>Enter your email address to reset our password</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" name="forget" placeholder="Enter your email address" {...register('email')} />
          <Input type="submit" value="reset password" className="submit" />
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
