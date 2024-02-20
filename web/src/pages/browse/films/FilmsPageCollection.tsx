import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { axios, useEffect, useState } from '@/utils/imports';
import BrowseItems from '../components/carousel/BrowseItems';

const FilmsPageCollection = () => {
  const { state } = useStoreContext();
  const [filmsCarousels, setFilmsCarousels] = useState<{
    allFilms: Content[];
    topRated: Content[];
  }>({
    allFilms: [],
    topRated: [],
  });

  useEffect(() => {
    const getSeries = async () => {
      const { data } = await axios.get('api/v1/content/movies', {
        headers: {
          Authorization: `Bearer ${state.userInfo?.token}`,
        },
      });
      const topFilms: Content[] = data.slice(-10);
      setFilmsCarousels({
        allFilms: data,
        topRated: topFilms,
      });
    };

    getSeries();
  }, [state.userInfo?.token]);

  return (
    <>
      <BrowseItems
        carouselTitle="All Films"
        carouselContent={filmsCarousels.allFilms}
      />
      <BrowseItems
        carouselTitle="Top Rated"
        carouselContent={filmsCarousels.topRated}
      />
    </>
  );
};

export default FilmsPageCollection;
