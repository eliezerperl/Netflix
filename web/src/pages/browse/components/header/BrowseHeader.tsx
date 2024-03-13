import Header from '@/utils/components/header/Header';
import BrowseHeaderLinks from './BrowseHeaderLinks';
import BrowseHeaderIcons from './BrowseHeaderIcons';
import { useEffect, useLocation, useNavigate, useRef } from '@/utils/imports';
import { ArrowLeftIcon } from 'lucide-react';

const BrowseHeader = () => {
  const browseHeaderRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);
  const legalPathnames: string[] = [
    '/browse',
    '/browse/series',
    '/browse/films',
    '/browse/my-list',
    '/search',
  ];

  useEffect(() => {
    if (!legalPathnames.includes(pathname)) {
      setTimeout(() => {
        browseHeaderRef.current?.classList.add('invisible');
      }, 2000);
    }
    if (legalPathnames.includes(pathname)) {
      browseHeaderRef.current?.classList.remove('invisible');
    }
  }, [pathname]);

  return (
    <>
      <div
        ref={browseHeaderRef}
        className={`fixed w-full z-50 h-14`}>
        <Header>
          <article className="flex flex-grow justify-between items-center pl-10">
            <BrowseHeaderLinks />
            <BrowseHeaderIcons />
          </article>
        </Header>
        {/* Top Color Transition */}
        <div className="absolute w-full top-14 h-28 bg-gradient-to-t from-transparent to-black"></div>
      </div>
      {!legalPathnames.includes(pathname) && (
        <ArrowLeftIcon
          onClick={() => navigate(-1)}
          className="absolute top-20 left-5 cursor-pointer"
        />
      )}
    </>
  );
};

export default BrowseHeader;
