import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ActionBtns from '../ActionBtns';
import { useStoreContext } from '@/utils/context/StoreContext';

type Props = {
  contentToShow: Content;
  size?: number;
  className?: string;
  children?: React.ReactNode;
  diffIcon?: boolean;
  notTooltip?: boolean;
  onClick?: () => void;
};

const Info = ({
  contentToShow,
  size,
  className,
  children,
  diffIcon,
  notTooltip,
  onClick,
}: Props) => {
  const { state } = useStoreContext();
  const { myList } = state;

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <ActionBtnWrapper
            className={className}
            tooltipText={!notTooltip ? 'Episodes & Info' : ''}
            onClick={() => {
              console.log(contentToShow);
            }}>
            {children}
            {!diffIcon && (
              <ChevronDownIcon
                size={size || 16}
                strokeWidth={1.5}
                color="white"
              />
            )}
          </ActionBtnWrapper>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="relative">
            <DialogClose asChild>
              <XIcon
                size={18}
                className="cursor-pointer absolute -right-3 -top-1 opacity-75 hover:opacity-100"
                onClick={() => onClick && onClick()}
              />
            </DialogClose>
            <div>
              {<img src={contentToShow.imgThumb} alt={contentToShow.title} />}
            </div>
            <div className="bg-transparent absolute bottom-4 left-4 ">
              <ActionBtns
                squarePlay
                size={32}
                content={contentToShow}
                myList={myList}
              />
            </div>
          </DialogHeader>
          <DialogTitle>{contentToShow.title}</DialogTitle>
          <DialogDescription className="grid grid-cols-6 gap-2">
            <section className="col-span-4">
              {contentToShow.description}
            </section>
            <section className="col-span-2 flex flex-col gap-2">
              <article>
                <strong>Duration:</strong> <div>{contentToShow.duration}</div>
              </article>
              <article>
                <strong>Genre:</strong> <div>{contentToShow.genre}</div>
              </article>
            </section>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Info;
