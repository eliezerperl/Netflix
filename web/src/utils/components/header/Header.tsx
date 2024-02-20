import { useStoreContext } from '@/utils/context/StoreContext';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const { state } = useStoreContext();
  const { userInfo } = state;

  let redirect = '';
  userInfo ? (redirect = '/browse') : (redirect = '/');
  return (
    <nav className={`flex justify-between py-5 px-10 ${className}`}>
      <Link to={redirect} className="flex h-10">
        <img width={90} src="/netflix.svg" alt="Netflix" />
      </Link>
      {children}
    </nav>
  );
};

export default Header;
