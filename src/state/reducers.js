import { AES, enc } from 'crypto-js';

export const initialstate = () => {
  let initialState = localStorage.getItem('auth');
  if (initialState) {
    const bytes = AES.decrypt(initialState, process.env.REACT_APP_AUTH_KEY);
    const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

    initialState = decryptedData;
  } else {
    initialState = '';
  }
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        state: action.payload,
      };
    case 'LOGIN':
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
