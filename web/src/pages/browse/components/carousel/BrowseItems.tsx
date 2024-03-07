import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import BrowseItem from './BrowseItem';
import { Content } from '@/models/content';

type Props = {
  carouselTitle?: string;
  carouselContent: Content[];
  className?: string;
};

const BrowseItems = ({ carouselTitle, carouselContent, className }: Props) => {
  return (
    <div className={`px-16 py-14 ${className}`}>
      <div className='text-3xl pb-4'>{carouselTitle && carouselTitle}</div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full">
        <CarouselContent>
          {carouselContent.map((content, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
              <BrowseItem content={content} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BrowseItems;
