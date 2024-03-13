import { Card, CardContent } from '@/components/ui/card';
import { Content } from '@/models/content';
import { useRef, useState } from '@/utils/imports';
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
  const contenRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  //img Dimensions
  const imgHeight: number | undefined = imgRef.current?.height;

  const setPlayerVisible = () => {
    imgRef.current?.setAttribute('class', 'invisible');

    contenRef.current?.setAttribute('hovered', 'true');
    contenRef.current?.classList.replace('invisible', 'visible');

    setHovered(true);
  };
  const setPlayerInvisible = () => {
    imgRef.current?.classList.replace('invisible', 'visible');

    contenRef.current?.setAttribute('hovered', 'false');
    contenRef.current?.classList.replace('visible', 'invisible');
    setHovered(false);
  };

  return (
    <Card className={`bg-transparent border-none`}>
      <CardContent className="relative flex  items-center justify-center">
        <section
          onMouseLeave={setPlayerInvisible}
          style={{
            height: imgHeight,
          }}
          className={`transform transition-transform duration-500 hover:z-10 hover:scale-150`}>
          <img
            onMouseEnter={() => setHovered(true)}
            ref={imgRef}
            src={content.imgThumb}
            alt={content.title}
          />

          <div className={`invisible absolute -top-16 left-0 ${hovered && 'z-50'}`} ref={contenRef}>
            <article className='relative'>
              {/* overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-transparent z-50" />
              <ContentPlayer
                show={(ready: boolean) => ready && setPlayerVisible()}
                contentURL={content.trailer}
                hovered={hovered}
              />
            </article>
            <div
              className={`w-full bg-black p-1 absolute -bottom-20 ${
                !hovered ? 'invisible' : 'visible'
              }`}>
              <section className="flex justify-between">
                {userInfo && (
                  <>
                    <ActionBtns content={content} myList={userInfo.list} />
                  </>
                )}
                <Info
                  onClick={() => setHovered(false)}
                  contentToShow={content}
                />
              </section>

              <section className="text-white text-xs grid grid-cols-3">
                <div className="flex col-span-1">{content.year}</div>
                <div className="flex flex-col col-span-2">
                  <strong>Genre:</strong> {content.genre}
                  <strong>Duration:</strong> {content.duration}
                </div>
              </section>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default BrowseItem;
