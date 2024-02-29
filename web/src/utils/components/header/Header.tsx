import { useStoreContext } from '@/utils/context/StoreContext';
import React from 'react';
import { Link, useLocation } from '@/utils/imports';
import { Button } from '@/components/ui/button';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const { state } = useStoreContext();
  const { pathname } = useLocation();
  const { userInfo } = state;

  let showSignIn = false;
  pathname === '/' || pathname === '/register'
    ? (showSignIn = true)
    : (showSignIn = false);
  let redirect = '';
  userInfo ? (redirect = '/browse') : (redirect = '/');

  return (
    <nav
      className={`flex items-center py-3 px-5  fixed w-full z-10 overflow-x-hidden ${
        userInfo && 'bg-black'
      } ${className}`}>
      <section className="relative flex gap-2 w-full ">
        <Link to={redirect} className="flex h-10">
          <img width={90} src="/netflix.svg" alt="Netflix" />
        </Link>{' '}
        {children}
      </section>

      {showSignIn && (
        <Link to={'/login'}>
          <Button className="bg-red-600">Sign In</Button>
        </Link>
      )}
    </nav>
  );
};

export default Header;
