import Title from '@/utils/components/shared/Title';
import BrowseItemsCollection from './BrowseItemsCollection';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast, useEffect, useState } from '@/utils/imports';
import { CarouselContent } from '@/models/carouselContent';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import { Content } from '@/models/content';

const Browse = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [content, setContent] = useState<CarouselContent[] | null>(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await requestContent(userInfo);

        if (data) {
          const movies: Content[] = data.filter(
            (content: Content) => !content.isSeries
          );
          const shows: Content[] = data.filter(
            (content: Content) => content.isSeries
          );
          setContent([
            { carouselTitle: 'Content', carouselContent: data },
            { carouselTitle: 'Series', carouselContent: shows },
            { carouselTitle: 'Films', carouselContent: movies },
          ]);
        }
      } catch (error) {
        const axiosError = error as AxiosError<CustomError>;
        toast.error(getError(axiosError));
      }
    };

    getContent();
  }, [userInfo]);

  return (
    <>
      <Title title="Browse" />
      <BrowseLayout contentTitle="Rick and Morty">
        <BrowseItemsCollection carouselContents={content} />
      </BrowseLayout>
    </>
  );
};

export default Browse;
