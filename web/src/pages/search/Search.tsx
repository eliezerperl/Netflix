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
        <div className='mx-20 mt-32 mb-10'>{searchText ? `Search Results for ${searchText}` : `All Content`}</div>
        <article className="grid grid-cols-4 gap-10 mb-40 mx-12">
          {content &&
            content.map((cont) => (
                <BrowseItem key={cont.title} content={cont} />
            ))}
        </article>
      </BrowseLayout>
    </>
  );
};

export default Search;
