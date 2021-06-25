import React from 'react';

type props={
    children: string
    type: undefined

}

export default function Button({ type, children, ...rest }: props): JSX.Element {
  return (
    <>
      <button type={type} {...rest} className="btn">{children}</button>
    </>
  );
}
