import BrowseLayout from '@/utils/components/shared/BrowseLayout';
import BrowseItem from '../browse/components/carousel/BrowseItem';
import { toast, useEffect, useLocation, useState } from '@/utils/imports';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import Title from '@/utils/components/shared/Title';

const Search = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;

  const [content, setContent] = useState<Content[]>();
  const { search } = useLocation();
  const searchText = new URLSearchParams(search).get('q');

  useEffect(() => {
    const getContent = async () => {
      try {
        if (searchText) {
          const data = await requestContent(userInfo, 'search', searchText);
          setContent(data);
        } else {
          const data = await requestContent(userInfo);
          setContent(data);
        }
      } catch (error) {
        const axiosError = error as AxiosError<CustomError>;
        toast.error(getError(axiosError));
      }
    };

    getContent();
  }, [searchText, userInfo, search]);

  return (
    <>
      <Title title="Search" />
      <BrowseLayout WithoutHero>
        <article className="grid grid-cols-4 gap-5 mb-16 mt-20 mx-12">
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
