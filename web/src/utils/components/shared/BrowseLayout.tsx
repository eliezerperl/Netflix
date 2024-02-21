import BrowseHero from '@/pages/browse/components/BrowseHero';
import BrowseHeader from '@/pages/browse/components/header/BrowseHeader';
import React from 'react';
import BrowseFooter from '@/pages/browse/components/footer/BrowseFooter';
import { useStoreContext } from '@/utils/context/StoreContext';
import { useEffect, useNavigate } from '@/utils/imports';
import { isTokenInvalid } from '@/lib/utils';
import { USER_SIGNOUT } from '@/utils/actions/Actions';

type Props = {
  contentTitle?: string;
  children?: React.ReactNode;
  componentWitouthHero?: boolean;
};

const BrowseLayout = ({
  contentTitle,
  children,
  componentWitouthHero,
}: Props) => {
  const { state, dispatch } = useStoreContext();
  const { userInfo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo?.token) {
      navigate('/login');
      return;
    }

      const isExpired: boolean = isTokenInvalid(userInfo.token);
      if (isExpired) dispatch({ type: USER_SIGNOUT });

  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <BrowseHeader />

      {!componentWitouthHero && <BrowseHero contentTitle={contentTitle} />}

      {children}

      <BrowseFooter />
    </>
  );
};

export default BrowseLayout;
