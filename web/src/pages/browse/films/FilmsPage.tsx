import { Content } from '@/models/content';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { useStoreContext } from '@/utils/context/StoreContext';
import { axios, useEffect, useState } from '@/utils/imports';
import ContentCollection from '../components/ContentCollection';
import { isTokenInvalid } from '@/lib/utils';

const FilmsPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [randomFilm, setRandomFilm] = useState<Content>();
  const [filmsCarousels, setFilmsCarousels] = useState<{
    allFilms: Content[];
    topRated: Content[];
  }>({
    allFilms: [],
    topRated: [],
  });

  useEffect(() => {
    const getContent = async () => {
      if (userInfo && isTokenInvalid(userInfo.token)) return;

      const { data } = await axios.get(`/api/v1/content/movies`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      const content: Content[] = data;
      const randomIndex = Math.floor(Math.random() * content.length);
      const random = content[randomIndex];
      setRandomFilm(random);

      const topFilms: Content[] = data.slice(-10);
      setFilmsCarousels({
        allFilms: content,
        topRated: topFilms,
      });
    };

    getContent();
  }, [userInfo]);
  return (
    <>
      {randomFilm ? (
        <BrowseLayout contentTitle={randomFilm.title}>
          <ContentCollection
            contentType="Films"
            content={filmsCarousels.allFilms}
            topRated={filmsCarousels.topRated}
          />
        </BrowseLayout>
      ) : (
        <BrowseLayout>Invalid</BrowseLayout>
      )}
    </>
  );
};

export default FilmsPage;
