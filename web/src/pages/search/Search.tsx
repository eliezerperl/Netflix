import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import BrowseItem from '../browse/components/carousel/BrowseItem';
import { axios, useEffect, useLocation, useState } from '@/utils/imports';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';

const Search = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;

  const [content, setContent] = useState<Content[]>();
  const { search } = useLocation();
  const searchText = new URLSearchParams(search).get('q');

  useEffect(() => {
    const getContent = async () => {
      const { data } = await axios.get('/api/v1/content', {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      setContent(data);
    };
    getContent();
  }, [searchText, userInfo?.token]);

  return (
    <>
      <BrowseLayout WithoutHero>
          <article className="grid grid-cols-4 gap-5 mt-20 mx-12">
            {content &&
              content.map((cont) => (
                <div key={cont.title}>
                  <BrowseItem content={cont} />
                </div>
              ))}
          </article>
      </BrowseLayout>
    </>
  );
};

export default Search;
