/* eslint-disable no-console */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from './Button';
import Input from './Input.jsx';
import User from '../icons/user.svg';
import '../scss/components/form.scss';
import { ReactComponent as Google } from '../icons/google.svg';

export default function Signup() {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data);
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
          <h4>Sign up with your google accout</h4>
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
        <div className="ss-login-option">
          <div><Link to="/">Have account? Login</Link></div>
        </div>
      </div>
    </div>
  );
}
