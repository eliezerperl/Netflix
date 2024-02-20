import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseItems from '../components/carousel/BrowseItems';
import BrowseHeader from '../components/header/BrowseHeader';
import BrowseFooter from '../components/footer/BrowseFooter';

const MyListPage = () => {
  const { state } = useStoreContext();
  const { myList } = state;
  return (
    <>
      <BrowseHeader />
      <div className="h-screen px-8 pt-24">
        <span className="text-4xl">My List</span>

        <div
          className={`${
            myList.length === 0 && 'h-full flex items-center justify-center'
          }`}>
          {myList.length === 0 ? (
            <span>NO ITEMS IN YOUR LIST</span>
          ) : (
            <BrowseItems carouselContent={myList} />
          )}
        </div>
      </div>
      <BrowseFooter />
    </>
  );
};

export default MyListPage;
