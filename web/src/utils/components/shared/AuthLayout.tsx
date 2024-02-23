import { useStoreContext } from '@/utils/context/StoreContext';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import React from 'react';
import { isTokenInvalid } from '@/lib/utils';
import { useEffect, useNavigate } from '@/utils/imports';

type AuthLayoutProps = {
  className?: string;
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
};

const AuthLayout = ({
  className,
  children,
  footerChildren,
  headerChildren,
}: AuthLayoutProps) => {
  const navigate = useNavigate();
  const {state} = useStoreContext();
  const {userInfo} = state

  useEffect(() => {
    if (userInfo && !isTokenInvalid(userInfo)) navigate('/browse')
  }, [])
  
  return (
    <div
      className={`${className} absolute inset-0 min-h-screen flex flex-col justify-between`}>
      {/* Dimming layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Header className="z-10">{headerChildren}</Header>
      {children}
      <Footer className="z-10">{footerChildren}</Footer>
    </div>
  );
};

export default AuthLayout;
