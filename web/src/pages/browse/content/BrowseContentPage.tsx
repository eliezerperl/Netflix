import { toast, useEffect, useParams, useState } from '@/utils/imports';
import Title from '@/utils/components/shared/Title';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';

const BrowseContentPage = () => {
  const { title } = useParams();
  const [content, setContent] = useState<Content>();
  const { state } = useStoreContext();
  const { userInfo } = state;

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await requestContent(userInfo, title);
        if (data) {
          const content: Content = data[0];
          setContent(content);
        }
      } catch (error) {
        const axiosError = error as AxiosError<CustomError>;
        toast.error(getError(axiosError));
      }
    };
    getContent();
  }, [title, userInfo]);

  return (
    <>
      {title && <Title title={title} />}
      {content && (
        <ContentPlayer
          contentURL={content.trailer}
          hovered
          withoutOverlay
          withControls
        />
      )}
    </>
  );
};

export default BrowseContentPage;
