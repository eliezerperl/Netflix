import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { toast } from '@/utils/imports';
import { CheckCheckIcon } from 'lucide-react';

type Props = {
  contentToDoubleLike: Content;
  size?: number;
};

const DoubleLike = ({ contentToDoubleLike, size }: Props) => {
  return (
    <>
      <ActionBtnWrapper
        tooltipText="Love this!"
        onClick={() =>
          toast.info(`You really liked ${contentToDoubleLike.title}`)
        }>
        <CheckCheckIcon size={size || 16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default DoubleLike;
