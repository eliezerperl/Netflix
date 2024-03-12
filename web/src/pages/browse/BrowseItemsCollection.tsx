import BrowseItems from './components/carousel/BrowseItems';
import Footer from '@/utils/components/footer/Footer';
import { CarouselContent } from '@/models/carouselContent';

type Props = {
  carouselContents: CarouselContent[] | null;
};

const BrowseItemsCollection = ({ carouselContents }: Props) => {
  return (
    <div className="relative">
      <div className="absolute -top-44 z-30">
        <article className=' flex flex-col gap-24 mb-40'>

        {carouselContents &&
          carouselContents.map((carousel) => (
            <section key={carousel.carouselTitle}>
              <BrowseItems
                carouselTitle={carousel.carouselTitle}
                carouselContent={carousel.carouselContent}
                />
            </section>
          ))}
          </article>
        <Footer />
      </div>
    </div>
  );
};

export default BrowseItemsCollection;
