import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import Title from '@/utils/components/shared/Title';
import BrowseItem from '../components/carousel/BrowseItem';
import Footer from '@/utils/components/footer/Footer';

const MyListPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  return (
    <>
      <Title title="My List" />
      <BrowseLayout WithoutHero>
        <div
          className={`py-40 px-20
            `}>
          <div className="text-4xl">My List</div>
          {userInfo && (
            <>
              {userInfo.list.length === 0 ? (
                <div className=" p-40 pb-72">NO ITEMS IN YOUR LIST</div>
              ) : (
                <div className="grid grid-cols-5">
                  {userInfo.list.map((item) => (
                    <div key={item.title} className="py-10 px-4">
                      <BrowseItem content={item} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <Footer/>
      </BrowseLayout>
    </>
  );
};

export default MyListPage;
