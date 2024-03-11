import { Content } from '@/models/content';
import BrowseItems from './carousel/BrowseItems';
import Footer from '@/utils/components/footer/Footer';

type Props = {
  contentType: string;
  content: Content[];
  topRated: Content[];
};

const ContentCollection = ({ contentType, content, topRated }: Props) => {
  return (
    <div className="relative">
      <div className="absolute -top-52 flex flex-col gap-28 z-30">
        <section>
          <BrowseItems
            carouselTitle={`All ${contentType}`}
            carouselContent={content}
          />
          <BrowseItems carouselTitle="Top Rated" carouselContent={topRated} />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ContentCollection;
