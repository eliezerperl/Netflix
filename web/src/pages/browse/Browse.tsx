
import BrowseItemsCollection from './BrowseItemsCollection';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';

const Browse = () => {




  return (
    <>
      <BrowseLayout contentTitle="Rick and Morty">
        <BrowseItemsCollection />
      </BrowseLayout>
    </>
  );
};

export default Browse;
