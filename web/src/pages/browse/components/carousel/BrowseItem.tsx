import { Card, CardContent } from '@/components/ui/card';
import { Content } from '@/models/content';
import { useState } from '@/utils/imports';
import { useStoreContext } from '@/utils/context/StoreContext';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import ActionBtns from './ActionBtns';
import Info from './buttons/Info';

type Props = {
  content: Content;
};

const BrowseItem = ({ content }: Props) => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Card className={`bg-transparent border-none ${hovered ? '' : ''}`}>
      <CardContent className="flex aspect-square items-center justify-center">
        <section
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          className={`${
            hovered ? 'z-10' : ''
          } h-auto transform transition-transform duration-500 hover:scale-150`}>
          {!hovered ? (
            <img src={content.imgThumb} alt={content.title} />
          ) : (
            <>
              <ContentPlayer contentURL={content.trailer} />
              <div className="absolute bottom-0 h-9 w-full bg-black flex justify-between p-1">
                {userInfo && (
                  <ActionBtns content={content} myList={userInfo.list} />
                )}
                <Info
                  onClick={() => setHovered(false)}
                  contentToShow={content}
                />
              </div>
            </>
          )}
        </section>
      </CardContent>
    </Card>
  );
};

export default BrowseItem;
