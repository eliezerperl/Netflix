import { Content } from '@/models/content';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast, useEffect, useState } from '@/utils/imports';
import ContentCollection from '../components/ContentCollection';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import Title from '@/utils/components/shared/Title';

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
      try {
        const data = await requestContent(userInfo, 'movies');

        if (data) {
          const content: Content[] = data;
          const randomIndex = Math.floor(Math.random() * content.length);
          const random = content[randomIndex];
          setRandomFilm(random);

          const topFilms: Content[] = data.slice(-10);
          setFilmsCarousels({
            allFilms: content,
            topRated: topFilms,
          });
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
      <Title title='Films'/>
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
