import { Content } from '@/models/content';
import BrowseItems from './carousel/BrowseItems';

type Props = {
  contentType: string;
  content: Content[];
  topRated: Content[];
};

const ContentCollection = ({ contentType, content, topRated }: Props) => {
  return (
    <>
      <BrowseItems
        carouselTitle={`All ${contentType}`}
        carouselContent={content}
      />
      <BrowseItems carouselTitle="Top Rated" carouselContent={topRated} />
    </>
  );
};

export default ContentCollection;
