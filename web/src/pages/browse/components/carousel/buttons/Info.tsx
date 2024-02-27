import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ChevronDownIcon } from 'lucide-react';
import {
  Dialog,
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
};

const Info = ({ contentToShow }: Props) => {
  const { state } = useStoreContext();
  const { myList } = state;

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <ActionBtnWrapper
            tooltipText="Episodes & Info"
            onClick={() => console.log(contentToShow)}>
            <ChevronDownIcon size={16} strokeWidth={1.5} color="white" />
          </ActionBtnWrapper>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="relative">
            <div>
              {<img src={contentToShow.imgThumb} alt={contentToShow.title} />}
            </div>
            <div className="bg-transparent absolute bottom-4 left-4 ">
              <ActionBtns size={32} content={contentToShow} myList={myList} />
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
