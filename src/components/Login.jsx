/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from './Button';
import Input from './Input.jsx';
import User from '../icons/user.svg';
import '../scss/components/form.scss';
import { ReactComponent as Google } from '../icons/google.svg';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success('Login Sucessful');
    } catch (error) {
      console.log(error);
      toast.error('Login failed');
    }
  };

  return (
    <div>
      <div className="form-wraper">
        <div className="ss-avatar">
          <img src={User} alt="icon" width="80%" />
        </div>
        <div className="ss-h2-wrap"><h2 className="sa-h2">Login</h2></div>
        <div className="social">
          <h4>Login with your google accout</h4>
          <a href="/">
            <div className="google">

              <Google width="20%" />
              <span> Google</span>
            </div>

          </a>
        </div>
        <div>
          <hr />
          <h3> Or</h3>

        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input type="text" name="email" placeholder="age" {...register('email')} required />
          <br />
          <Input type="password" name="password" placeholder="Password" {...register('password')} required />
          <div className="bth-wrap"><Button type="submit">Submit</Button></div>
          {/* <Input type="submit" className="submit" /> */}
        </form>
        <div className="password-reset">
          <div><Link to="/password-reset">forget password</Link></div>
        </div>
        <div className="ss-login-option">
          <div><Link to="/signup">Create Account</Link></div>
        </div>
      </div>
    </div>
  );
}
