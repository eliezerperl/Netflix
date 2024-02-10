import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseHeader from './BrowseHeader';
import { useEffect, useNavigate } from '@/utils/imports';

const Browse = () => {
  const { state } = useStoreContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.userInfo) navigate('/login');
  }, [navigate, state.userInfo]);

  return (
    <>
      <BrowseHeader />
    </>
  );
};

export default Browse;
