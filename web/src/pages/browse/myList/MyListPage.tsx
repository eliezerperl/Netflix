import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseItems from '../components/carousel/BrowseItems';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';

const MyListPage = () => {
  const { state } = useStoreContext();
  const { myList } = state;
  return (
    <>
      <BrowseLayout componentWitouthHero>
        <div
          className={` h-fit p-24 flex flex-col 
            `}>
            <div className="text-4xl">My List</div>
          {myList.length === 0 ? (
            <div className='p-24'>NO ITEMS IN YOUR LIST</div>
          ) : (
            <BrowseItems className='py-8 pb-72' carouselContent={myList} />
          )}
        </div>
      </BrowseLayout>
    </>
  );
};

export default MyListPage;
