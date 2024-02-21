import { isTokenInvalid } from '@/lib/utils';
import { Content } from '@/models/content';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { useStoreContext } from '@/utils/context/StoreContext';
import { axios, useEffect, useState } from '@/utils/imports';

type Props = {
  contentTitle?: string;
};

const BrowseHero = ({ contentTitle }: Props) => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    const getContent = async () => {
      if (userInfo && isTokenInvalid(userInfo.token)) return;

      const { data } = await axios.get(`/api/v1/content/${contentTitle}`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      });
      const content: Content = data[0];
      setContent(content);
    };
    getContent();
  }, [contentTitle, userInfo, userInfo?.token]);

  return (
    <div className="w-full h-full relative">
      {content?.trailer && <ContentPlayer contentURL={content.trailer} />}
      {/* Color Transition bottom of hero */}
      <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default BrowseHero;
