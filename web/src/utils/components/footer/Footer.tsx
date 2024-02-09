import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Footer = ({ children, className }: Props) => {
  return <nav className={`${className} flex justify-between`}>{children}</nav>;
};

export default Footer;
