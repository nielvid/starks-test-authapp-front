/* eslint-disable no-console */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from './Button';
import Input from './Input.jsx';
import User from '../icons/user.svg';
import '../scss/components/form.scss';
import LoginWithGoogle from './LoginWithGoogle.jsx';
import { signup } from '../queries/axios.config.js';

export default function Signup() {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await signup(data);
      console.log(res);
      toast.success('Sign up Sucessful');
      history.push('/');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div>
      <div className="form-wraper">
        <div className="ss-avatar">
          <img src={User} alt="icon" width="80%" />
        </div>
        <div className="ss-h2-wrap"><h2 className="sa-h2">Sign up</h2></div>
        <div className="social">
          <LoginWithGoogle buttonText="Sign up with Google" />
        </div>
        <div>
          <hr />
          <h3> Or</h3>
          <p>Use your Email and Password</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input type="text" name="email" placeholder="age" {...register('email')} required />
          <br />
          <Input type="password" name="password" placeholder="Password" {...register('password')} required />
          <div className="bth-wrap"><Button type="submit">Submit</Button></div>
          {/* <Input type="submit" className="submit" /> */}

        </form>
        <div className="ss-login-option">
          <div><Link to="/">Have account? Login</Link></div>
        </div>
      </div>
    </div>
  );
}
