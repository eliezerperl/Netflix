import { axios, useEffect, useState } from '@/utils/imports';
import BrowseItems from './components/carousel/BrowseItems';
import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { isTokenInvalid } from '@/lib/utils';

const BrowseItemsCollection = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
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
      if (userInfo && isTokenInvalid(userInfo.token)) return;

      const { data } = await axios.get('api/v1/content', {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
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
  }, [userInfo]);

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
