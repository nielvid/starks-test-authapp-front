import React from 'react';
import '../../scss/containers.scss';

type Props = {
children: React.ReactChild
}
export default function PageWrapper({ children }: Props) :JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  );
}
