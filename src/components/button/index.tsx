import React, { FC } from 'react';
import './button.scss';

interface IButton
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const Button: FC<IButton> = ({ onClick, children, className, href }) => {
  return (
    <a href={href} className={`button ${className}`} onClick={onClick}>
      {children}
    </a>
  );
};

export { Button };
