import { useStoreContext } from '@/utils/context/StoreContext';
import React from 'react';
import { isTokenInvalid } from '@/lib/utils';
import { useEffect, useNavigate } from '@/utils/imports';
import { USER_SIGNOUT } from '@/utils/actions/Actions';

type AuthLayoutProps = {
  children: React.ReactNode;
  className?: string;
  headerChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
};

const AuthLayout = ({ children, className }: AuthLayoutProps) => {
  const navigate = useNavigate();
  const { state, dispatch } = useStoreContext();
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      if (isTokenInvalid(userInfo)) {
        dispatch({ type: USER_SIGNOUT });
      } else {
        navigate('/browse');
      }
    }
  }, [dispatch, navigate, userInfo]);

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
