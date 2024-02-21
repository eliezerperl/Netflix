import { axios, useEffect, useState } from '@/utils/imports';
import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import ContentCollection from '../components/ContentCollection';
import { isTokenInvalid } from '@/lib/utils';

const SeriesPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [randomSeries, setRandomSeries] = useState<Content>();
  const [seriesCarousels, setSeriesCarousels] = useState<{
    allSeries: Content[];
    topRated: Content[];
  }>({
    allSeries: [],
    topRated: [],
  });

  useEffect(() => {
    const getContent = async () => {
      if (userInfo && isTokenInvalid(userInfo.token)) return;

      const { data } = await axios.get(`/api/v1/content/series`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      const content: Content[] = data;
      const randomIndex = Math.floor(Math.random() * content.length);
      const random = content[randomIndex];
      setRandomSeries(random);

      const topSeries: Content[] = data.slice(-10);
      setSeriesCarousels({
        allSeries: data,
        topRated: topSeries,
      });
    };

    getContent();
  }, [userInfo]);
  return (
    <>
      {randomSeries ? (
        <BrowseLayout contentTitle={randomSeries.title}>
          <ContentCollection
            contentType="Series"
            content={seriesCarousels.allSeries}
            topRated={seriesCarousels.topRated}
          />
        </BrowseLayout>
      ) : (
        <BrowseLayout>Invalid</BrowseLayout>
      )}
    </>
  );
};

export default SeriesPage;
