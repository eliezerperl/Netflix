import { Link, useLocation } from '@/utils/imports';

const BrowseHeaderLinks = () => {
  const { pathname } = useLocation();

  const linksClassName = (location: string) =>
    `${pathname === location && 'text-gray-400'} hover:text-gray-400`;

  return (
    <section className="flex gap-6">
      <Link className={`${linksClassName('/browse')}`} to={'/browse'}>
        Home
      </Link>
      <Link
        className={`${linksClassName('/browse/series')}`}
        to={'/browse/series'}>
        Series
      </Link>
      <Link
        className={`${linksClassName('/browse/films')}`}
        to={'/browse/films'}>
        Films
      </Link>
      <Link className={`${linksClassName('#')}`} to={'#'}>
        New & Popular
      </Link>
      <Link
        className={`${linksClassName('/browse/my-list')}`}
        to={'/browse/my-list'}>
        My List
      </Link>
    </section>
  );
};

export default BrowseHeaderLinks;
