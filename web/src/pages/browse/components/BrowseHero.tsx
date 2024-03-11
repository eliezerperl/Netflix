import { AxiosError, CustomError, getError, requestContent } from '@/lib/utils';
import { Content } from '@/models/content';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast, useEffect, useRef, useState } from '@/utils/imports';
import HeroActionBtns from './HeroActionBtns';

type Props = {
  contentTitle?: string;
  withoutActionBtns?: boolean;
};

const BrowseHero = ({ contentTitle, withoutActionBtns }: Props) => {
  const { state } = useStoreContext();
  const { userInfo } = state;
  const [content, setContent] = useState<Content>();
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      // descRef.current?.classList.add('invisible');
      if (descRef.current) {
        descRef.current.style.display = 'none';
      }
    }, 4000);
  }, []);

  useEffect(() => {
    const getContent = async () => {
      try {
        const data = await requestContent(userInfo, contentTitle);
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
  }, [contentTitle, userInfo, userInfo?.token]);

  const setPlayerVisible = () => {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
      contentRef.current?.classList.replace('invisible', 'visible');
    }
  };

  return (
    <div className="w-full h-full relative">
      {content && (
        <>
          <img
            className="absolute bottom-20"
            ref={imgRef}
            src={content.img}
            alt={content.title}
          />
          <div className="h-full invisible" ref={contentRef}>
            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-full z-20" />
            <ContentPlayer
              contentURL={content.trailer}
              hovered
              show={(ready: boolean) => ready && setPlayerVisible()}
            />
          </div>
          {!withoutActionBtns && (
            <section className="absolute z-20 bottom-44 left-10 flex flex-col gap-3 items-center">
              <img src={content.imgTitle} alt={content.title} width={400} />
              <article ref={descRef} className="max-w-80 line-clamp-4">
                {content.description}
              </article>
              <span>
                <HeroActionBtns size={54} content={content} />
              </span>
            </section>
          )}
        </>
      )}
      {/* Color Transition bottom of hero */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default BrowseHero;
