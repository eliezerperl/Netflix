import BrowseHero from '@/pages/browse/components/BrowseHero';
import BrowseHeader from '@/pages/browse/components/header/BrowseHeader';
import React from 'react';
import BrowseFooter from '@/pages/browse/components/footer/BrowseFooter';

type Props = {
  contentTitle: string;
  children?: React.ReactNode;
};

const BrowseLayout = ({ contentTitle, children }: Props) => {
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
