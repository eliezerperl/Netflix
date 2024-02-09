import Footer from '../footer/Footer';
import Header from '../header/Header';
import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
};

const AuthLayout = ({
  children,
  footerChildren,
  headerChildren,
}: AuthLayoutProps) => {
  return (
    <div
      className={`bg-hero absolute inset-0 min-h-screen flex flex-col justify-between`}>
      {/* Dimming layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <Header className="z-10">{headerChildren}</Header>
      {children}
      <Footer className="z-10">
        {footerChildren}
      </Footer>
    </div>
  );
};

export default AuthLayout;
