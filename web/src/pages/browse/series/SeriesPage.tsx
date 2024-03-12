import { toast, useEffect, useState } from '@/utils/imports';
import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import Title from '@/utils/components/shared/Title';
import BrowseItemsCollection from '../BrowseItemsCollection';
import { CarouselContent } from '@/models/carouselContent';

const SeriesPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [randomSeries, setRandomSeries] = useState<Content>();
  const [seriesCarousels, setSeriesCarousels] = useState<
    CarouselContent[] | null
  >(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await requestContent(userInfo, 'series');

        if (data) {
          const content: Content[] = data;
          const randomIndex = Math.floor(Math.random() * content.length);
          const random = content[randomIndex];
          setRandomSeries(random);

          const topSeries: Content[] = data.slice(-10);

          setSeriesCarousels([
            { carouselTitle: 'Series', carouselContent: data },
            { carouselTitle: 'Top Rated', carouselContent: topSeries },
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
      <Title title="Series" />
      {randomSeries && (
        <BrowseLayout contentTitle={randomSeries.title}>
          <BrowseItemsCollection carouselContents={seriesCarousels} />
        </BrowseLayout>
      )}
    </>
  );
};

export default SeriesPage;
