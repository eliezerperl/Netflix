import BrowseItems from '../components/carousel/BrowseItems';
import { axios, useEffect, useState } from '@/utils/imports';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';

const SeriesPageColections = () => {
  const { state } = useStoreContext();
  const [seriesCarousels, setSeriesCarousels] = useState<{
    allSeries: Content[];
    topRated: Content[];
  }>({
    allSeries: [],
    topRated: [],
  });

  useEffect(() => {
    const getSeries = async () => {
      const { data } = await axios.get('api/v1/content/series', {
        headers: {
          Authorization: `Bearer ${state.userInfo?.token}`,
        },
      });
      const topSeries: Content[] = data.slice(-10);
      setSeriesCarousels({
        allSeries: data,
        topRated: topSeries,
      });
    };

    getSeries();
  }, [state.userInfo?.token]);

  return (
    <>
      <BrowseItems
        carouselTitle="All Series"
        carouselContent={seriesCarousels.allSeries}
      />
      <BrowseItems
        carouselTitle="Top Rated"
        carouselContent={seriesCarousels.topRated}
      />
    </>
  );
};

export default SeriesPageColections;
