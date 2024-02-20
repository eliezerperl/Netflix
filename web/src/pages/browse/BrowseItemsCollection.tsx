import { axios, useEffect, useState } from '@/utils/imports';
import BrowseItems from './components/carousel/BrowseItems';
import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';

const BrowseItemsCollection = () => {
  const { state } = useStoreContext();
  const [content, setContent] = useState<{
    allContent: Content[];
    films: Content[];
    series: Content[];
  }>({
    allContent: [],
    films: [],
    series: [],
  });

  useEffect(() => {
    const getContent = async () => {
      const { data } = await axios.get('api/v1/content', {
        headers: {
          Authorization: `Beare ${state.userInfo?.token}`,
        },
      });
      const movies: Content[] = data.filter(
        (content: Content) => content.isSeries === false
      );
      const shows: Content[] = data.filter(
        (content: Content) => content.isSeries === true
      );
      setContent({ allContent: data, films: movies, series: shows });
    };
    getContent();
  }, []);

  return (
    <>
      <BrowseItems
        carouselTitle="Content"
        carouselContent={content.allContent}
      />

      <BrowseItems carouselTitle="Series" carouselContent={content.series} />

      <BrowseItems carouselTitle="Films" carouselContent={content.films} />
    </>
  );
};

export default BrowseItemsCollection;
