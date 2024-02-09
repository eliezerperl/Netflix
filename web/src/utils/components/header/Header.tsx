import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  return (
    <nav className={`${className} flex justify-between p-3`}>
      <a href="/" className="flex">
        <img width={90} src="/netflix.svg" alt="Netflix" />
      </a>
      {children}
    </nav>
  );
};

export default Header;
