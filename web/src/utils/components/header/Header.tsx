import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  return (
    <nav className={`${className} flex justify-between p-3`}>
      <Link to="/" className="flex">
        <img width={90} src="/netflix.svg" alt="Netflix" />
      </Link>
      {children}
    </nav>
  );
};

export default Header;
