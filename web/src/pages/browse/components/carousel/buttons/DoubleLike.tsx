import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { CheckCheckIcon } from 'lucide-react';

type Props = {
  contentToDoubleLike: Content;
  className?: string
};

const DoubleLike = ({ contentToDoubleLike, className }: Props) => {
  return (
    <>
      <ActionBtnWrapper
      className={`${className}`}
        tooltipText="Love this!"
        onClick={() =>
          console.log(`You really liked ${contentToDoubleLike.title}`)
        }>
        <CheckCheckIcon size={16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default DoubleLike;
