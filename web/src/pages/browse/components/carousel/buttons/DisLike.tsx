import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ThumbsDownIcon } from 'lucide-react';

type Props = {
  contentToDislike: Content;
};

const DisLike = ({ contentToDislike }: Props) => {
  return (
    <ActionBtnWrapper
      tooltipText="Not for me"
      onClick={() => console.log(`You disliked ${contentToDislike.title}`)}>
      <ThumbsDownIcon size={16} strokeWidth={1.5} color="white" />
    </ActionBtnWrapper>
  );
};

export default DisLike;
