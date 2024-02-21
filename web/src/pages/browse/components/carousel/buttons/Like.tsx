import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ThumbsUpIcon } from 'lucide-react';
import DisLike from './DisLike';
import DoubleLike from './DoubleLike';

type Props = {
  contentToLike: Content;
  likeHoveredState: {
    likeHovered: boolean;
    setLikeHovered: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Like = ({ contentToLike, likeHoveredState }: Props) => {
  return (
    <div className="relative">
      <div
        className={`flex flex-row-reverse gap-1 ${
          likeHoveredState.likeHovered &&
          'absolute -translate-x-1/3 bg-gray-800 rounded-md transition'
        }`}
        onMouseLeave={() => likeHoveredState.setLikeHovered(false)}
        onMouseEnter={() => likeHoveredState.setLikeHovered(true)}>
        {likeHoveredState.likeHovered && (
          <DoubleLike contentToDoubleLike={contentToLike} />
        )}
        <ActionBtnWrapper
          tooltipText="I like this"
          onClick={() => console.log(`You liked ${contentToLike.title}`)}>
          <ThumbsUpIcon size={16} strokeWidth={1.5} color="white" />
        </ActionBtnWrapper>
        {likeHoveredState.likeHovered && (
          <DisLike contentToDislike={contentToLike} />
        )}
      </div>
    </div>
  );
};

export default Like;
