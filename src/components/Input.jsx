import React from 'react';
// import PropTypes from 'prop-types';
import '../scss/components/form.scss';

export default function Input(props) {
  const {
    type, placeholder, name, value, onChange, className,
  } = props;
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={`ss-input-form ${className}`} />
    </>
  );
}
