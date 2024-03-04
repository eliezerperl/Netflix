import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseItems from '../components/carousel/BrowseItems';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import Title from '@/utils/components/shared/Title';

const MyListPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  return (
    <>
      <Title title='My List'/>
      <BrowseLayout WithoutHero>
        <div
          className={` h-fit p-24 flex flex-col 
            `}>
          <div className="text-4xl">My List</div>
          {userInfo && (
            <>
              {userInfo.list.length === 0 ? (
                <div className=" p-40 pb-72">NO ITEMS IN YOUR LIST</div>
              ) : (
                <BrowseItems
                  className="py-9 pb-72"
                  carouselContent={userInfo.list}
                />
              )}
            </>
          )}
        </div>
      </BrowseLayout>
    </>
  );
};

export default MyListPage;
