import Title from '@/utils/components/shared/Title';
import BrowseItemsCollection from './BrowseItemsCollection';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';

const Browse = () => {
  return (
    <>
      <Title title="Browse" />
      <BrowseLayout contentTitle="Rick and Morty">
        <BrowseItemsCollection />
      </BrowseLayout>
    </>
  );
};

export default Browse;
