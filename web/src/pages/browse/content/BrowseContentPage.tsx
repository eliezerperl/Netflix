import { axios, useEffect, useParams, useState } from '@/utils/imports';
import BrowseHeader from '../components/header/BrowseHeader';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { useStoreContext } from '@/utils/context/StoreContext';
import { Content } from '@/models/content';
import BrowseFooter from '../components/footer/BrowseFooter';

const BrowseContentPage = () => {
  const { state } = useStoreContext();
  const [content, setContent] = useState<Content>();
  const { title } = useParams();

  useEffect(() => {
    const getContent = async () => {
      const { data } = await axios.get(`/api/v1/content/${title}`, {
        headers: {
          Authorization: `Bearer ${state.userInfo?.token}`,
        },
      });
      setContent(data[0]);
    };
    getContent();
  }, [state.userInfo?.token, title]);

  return (
    <>
      {title && content && (
        <>
          <BrowseHeader />
          <ContentPlayer contentURL={content?.movie} />
          <BrowseFooter />
        </>
      )}
    </>
  );
};

export default BrowseContentPage;
