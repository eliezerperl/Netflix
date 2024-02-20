import { Content } from '@/models/content';
import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import { useStoreContext } from '@/utils/context/StoreContext';
import { axios, useEffect, useState } from '@/utils/imports';
import FilmsPageCollection from './FilmsPageCollection';

const FilmsPage = () => {
  const { state } = useStoreContext();
  const [randomFilm, setRandomFilm] = useState<Content>();

  useEffect(() => {
    const getContent = async () => {
      const { data } = await axios.get(`/api/v1/content/movies`, {
        headers: {
          Authorization: `Bearer ${state.userInfo?.token}`,
        },
      });
      const content: Content[] = data;
      const randomIndex = Math.floor(Math.random() * content.length);
      const random = content[randomIndex];
      setRandomFilm(random);
    };
    getContent();
  }, [state.userInfo?.token]);
  return (
    <>
      {randomFilm && (
        <BrowseLayout contentTitle={randomFilm.title}>
          <FilmsPageCollection />
        </BrowseLayout>
      )}
    </>
  );
};

export default FilmsPage;
