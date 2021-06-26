import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const signup = async (body) => {
  const { data } = await instance.post('/user', body);
  return data;
};

export const login = async (body) => {
  const { data } = await instance.post('/login', body);
  return data;
};

export const googleSignUp = async (body) => {
  const { data } = await instance.post('/google/signup', body);
  return data;
};

export const googleLogin = async (body) => {
  const { data } = await instance.post('/google/login', body);
  return data;
};
