import { useParams } from '@/utils/imports';
import Title from '@/utils/components/shared/Title';
import BrowseHero from '../components/BrowseHero';

const BrowseContentPage = () => {
  const { title } = useParams();

  return (
    <>
      {title && <Title title={title} />}
      <BrowseHero contentTitle={title} withoutActionBtns />
    </>
  );
};

export default BrowseContentPage;
