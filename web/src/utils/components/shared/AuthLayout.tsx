import { useStoreContext } from '@/utils/context/StoreContext';
import React from 'react';
import { isTokenInvalid } from '@/lib/utils';
import { useEffect, useNavigate } from '@/utils/imports';

type AuthLayoutProps = {
  children: React.ReactNode;
  className?: string;
  headerChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
};

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  const navigate = useNavigate();
  const { state } = useStoreContext();
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo && !isTokenInvalid(userInfo)) navigate('/browse');
  }, [navigate, userInfo]);

  return (
    <div
      className={`${className} absolute inset-0 min-h-screen flex flex-col items-center justify-center h-full`}>
      {/* Backround Dimming layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {children}
    </div>
  );
};

export default AuthLayout;
