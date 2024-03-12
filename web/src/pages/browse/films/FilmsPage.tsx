import { Content } from '@/models/content';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast, useEffect, useState } from '@/utils/imports';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import Title from '@/utils/components/shared/Title';
import BrowseItemsCollection from '../BrowseItemsCollection';
import { CarouselContent } from '@/models/carouselContent';

const FilmsPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [randomFilm, setRandomFilm] = useState<Content>();
  const [filmsCarousels, setFilmsCarousels] = useState<
    CarouselContent[] | null
  >(null);

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

          setFilmsCarousels([
            { carouselTitle: 'Films', carouselContent: data },
            { carouselTitle: 'Top Rated', carouselContent: topFilms },
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
      <Title title="Films" />
      {randomFilm && (
        <BrowseLayout contentTitle={randomFilm.title}>
          <BrowseItemsCollection carouselContents={filmsCarousels} />
        </BrowseLayout>
      )}
    </>
  );
};

export default FilmsPage;
