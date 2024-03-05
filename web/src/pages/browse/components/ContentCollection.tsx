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
      <div className="mb-16">
        <BrowseItems
          carouselTitle={`All ${contentType}`}
          carouselContent={content}
        />
        <BrowseItems carouselTitle="Top Rated" carouselContent={topRated} />
      </div>
    </>
  );
};

export default ContentCollection;
