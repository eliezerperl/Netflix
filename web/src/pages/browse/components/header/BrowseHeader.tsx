import Header from '@/utils/components/header/Header';
import BrowseHeaderLinks from './BrowseHeaderLinks';
import BrowseHeaderIcons from './BrowseHeaderIcons';
import { useEffect, useLocation, useNavigate, useRef } from '@/utils/imports';
import { ArrowLeftIcon } from 'lucide-react';

const BrowseHeader = () => {
  const browseHeaderRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname)
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
        browseHeaderRef.current?.classList.add('opacity-0');
      }, 2000);
    }
    if (legalPathnames.includes(pathname)) {
      browseHeaderRef.current?.classList.remove('opacity-0');
    }
  }, [pathname]);

  return (
    <>
      <div
        ref={browseHeaderRef}
        className={`fixed w-full z-50 h-14 transition-opacity duration-500 hover:opacity-100`}>
        <Header className=''>
          <article className="flex flex-grow justify-between items-center pl-10">
            <BrowseHeaderLinks />
            <BrowseHeaderIcons />
          </article>
        </Header>
      </div>
        {/* Top Color Transition */}
        <div className="absolute w-full top-0 h-60 bg-gradient-to-t from-transparent to-black z-40"></div>
      {!legalPathnames.includes(pathname) && (
        <ArrowLeftIcon
          onClick={() => navigate(-1)}
          className="absolute top-20 left-5 cursor-pointer z-50"
        />
      )}
    </>
  );
};

export default BrowseHeader;
