import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <nav
      className={`${className} flex justify-around items-end z-10 w-full`}>
      <section className="flex">
        <a href="https://instagram.com/eliezer_perl">
          <InstagramIcon />
        </a>
        <a href="">
          <FacebookIcon />
        </a>
        <a href="">
          <YoutubeIcon />
        </a>
      </section>
      <section>
        <a href="mailto: eliezerrules@gmail.com">Contact us</a>
      </section>
    </nav>
  );
};

export default Footer;
