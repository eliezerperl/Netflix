import { axios, useEffect, useState } from '@/utils/imports';
import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import SeriesPageColections from './SeriesPageColections';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';

const SeriesPage = () => {
  const { state } = useStoreContext();
  const [randomSeries, setRandomSeries] = useState<Content>();

  useEffect(() => {
    const getContent = async () => {
      const { data } = await axios.get(`/api/v1/content/series`, {
        headers: {
          Authorization: `Bearer ${state.userInfo?.token}`,
        },
      });
      const content: Content[] = data;
      const randomIndex = Math.floor(Math.random() * content.length);
      const random = content[randomIndex];
      setRandomSeries(random);
    };
    getContent();
  }, [state.userInfo?.token]);
  return (
    <>
      {randomSeries && (
        <BrowseLayout contentTitle={randomSeries.title}>
          <SeriesPageColections />
        </BrowseLayout>
      )}
    </>
  );
};

export default SeriesPage;
