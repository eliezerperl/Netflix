import BrowseHero from '@/pages/browse/components/BrowseHero';
import BrowseHeader from '@/pages/browse/components/header/BrowseHeader';
import React from 'react';
import BrowseFooter from '@/pages/browse/components/footer/BrowseFooter';
import { useStoreContext } from '@/utils/context/StoreContext';
import { useEffect, useNavigate } from '@/utils/imports';

type Props = {
  contentTitle: string;
  children?: React.ReactNode;
};

const BrowseLayout = ({ contentTitle, children }: Props) => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) navigate('/login');
  }, [navigate, userInfo]);

  return (
    <>
      <BrowseHeader />

      <BrowseHero contentTitle={contentTitle} />

      {children}

      <BrowseFooter />
    </>
  );
};

export default BrowseLayout;
