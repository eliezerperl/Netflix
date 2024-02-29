import { toast, useEffect, useParams, useState } from '@/utils/imports';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';

const BrowseContentPage = () => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [content, setContent] = useState<Content>();
  const { title } = useParams();

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await requestContent(userInfo, title);

        if (data) setContent(data[0]);
      } catch (error) {
        const axiosError = error as AxiosError<CustomError>;
        toast.error(getError(axiosError));
      }
    };
    getContent();
  }, [title, userInfo]);

  return (
    <>
      {content && (
        <>
          <ContentPlayer contentURL={content?.movie} />
        </>
      )}
    </>
  );
};

export default BrowseContentPage;
