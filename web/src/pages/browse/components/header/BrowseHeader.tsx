import Header from '@/utils/components/header/Header';
import BrowseHeaderLinks from './BrowseHeaderLinks';
import BrowseHeaderIcons from './BrowseHeaderIcons';

const BrowseHeader = () => {
  return (
    <>
      <div className="fixed w-full z-30 h-14">
        <Header className="">
          <article className="flex flex-grow justify-between items-center pl-10">
            <BrowseHeaderLinks />
            <BrowseHeaderIcons />
          </article>
        </Header>
        {/* Top Color Transition */}
        <div className="absolute w-full top-14 h-28 bg-gradient-to-t from-transparent to-black"></div>
      </div>
    </>
  );
};

export default BrowseHeader;
