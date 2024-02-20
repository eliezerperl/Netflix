import { useStoreContext } from '@/utils/context/StoreContext';
import { useEffect, useNavigate } from '@/utils/imports';
import BrowseItemsCollection from './BrowseItemsCollection';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';

const Browse = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) navigate('/login');
  }, [navigate, userInfo]);

  return (
    <>
      <BrowseLayout contentTitle="Rick and Morty">
        <BrowseItemsCollection />
      </BrowseLayout>
    </>
  );
};

export default Browse;
