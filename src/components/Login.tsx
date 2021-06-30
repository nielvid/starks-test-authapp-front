/* eslint-disable no-console */
import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from './Button';
import Input from './Input';
import User from '../icons/user.svg';
import '../scss/components/form.scss';
// import { ReactComponent as Google } from '../icons/google.svg';
import LoginWithGoogle from './LoginWithGoogle.jsx';
import { login } from '../queries/axios.config.js';
import { AuthState } from '../state/store.js';

type values = {
data: Record<string, unknown>
}
export default function Login() {
  const history = useHistory();
  const [loading, setstate] = useState(false);

  const { dispatch } = useContext(AuthState);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: values) => {
    try {
      setstate(true);
      const res = await login(data);
      console.log(res);

      dispatch({ type: 'LOGIN', payload: res?.data });
      toast.success('Login Sucessful');
      setstate(false);
      history.push('/home');
    } catch (error) {
      console.log(error);
      toast.error('Login failed');
      setstate(false);
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
          <LoginWithGoogle buttonText="Log in with Google" />
        </div>
        <div>
          <hr />
          <h3> Or</h3>
          <p>Use your Email and Password</p>

        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <Input type="text" placeholder="age" {...register('email')} required />
          <br />
          <Input type="password" placeholder="Password" {...register('password')} required />
          <div className="bth-wrap">
            <Button type="submit">
              {!loading ? <span>Submit</span> : <span>loading...</span>}

            </Button>
          </div>
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
