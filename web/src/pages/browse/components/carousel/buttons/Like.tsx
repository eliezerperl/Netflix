import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { toast } from '@/utils/imports';
import { ThumbsUpIcon } from 'lucide-react';


type Props = {
  contentToLike: Content;
  size?: number;
};

const Like = ({ contentToLike, size }: Props) => {

  
  return (

        <ActionBtnWrapper
          tooltipText="I like this"
          onClick={() => toast.info(`You liked ${contentToLike.title}`)}>
          <ThumbsUpIcon size={size || 16} strokeWidth={1.5} color="white" />
        </ActionBtnWrapper>

  );
};

export default Like;
