import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { toast } from '@/utils/imports';
import { ThumbsDownIcon } from 'lucide-react';

type Props = {
  contentToDislike: Content;
  size?: number;
};

const DisLike = ({ contentToDislike, size }: Props) => {
  return (
    <ActionBtnWrapper
      tooltipText="Not for me"
      onClick={() => toast.info(`You disliked ${contentToDislike.title}`)}>
      <ThumbsDownIcon size={size || 16} strokeWidth={1.5} color="white" />
    </ActionBtnWrapper>
  );
};

export default DisLike;
