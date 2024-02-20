import Header from '@/utils/components/header/Header';
import BrowseHeaderLinks from './BrowseHeaderLinks';
import BrowseHeaderIcons from './BrowseHeaderIcons';

const BrowseHeader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 bg-black">
        <Header className="h-14 px-3 pt-3">
          <article className="flex flex-grow justify-between items-center pl-10">
            <BrowseHeaderLinks />
            <BrowseHeaderIcons />
          </article>
        </Header>

        {/* Color Transition */}
        <div className="absolute w-full h-8 bg-gradient-to-t from-transparent to-black"></div>
      </div>
    </>
  );
};

export default BrowseHeader;
