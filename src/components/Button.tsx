import React from 'react';

type props={
    children: any

    type: 'submit' | 'button' | 'reset'

}

export default function Button({
  type, children, ...rest
}: props): JSX.Element {
  return (
    <>
      <button type={type} {...rest} className="btn">

        {children}
      </button>
    </>
  );
}

// Button.defaultProps = {
//   type: 'submit',
// };
