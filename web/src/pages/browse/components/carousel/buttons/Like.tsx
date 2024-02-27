import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ThumbsUpIcon } from 'lucide-react';
import DisLike from './DisLike';
import DoubleLike from './DoubleLike';
import { useState } from 'react';

type Props = {
  contentToLike: Content;
  size?: number;
};

const Like = ({ contentToLike, size }: Props) => {
  const [likeHovered, setLikeHovered] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className={`flex flex-row-reverse gap-1 ${
          likeHovered &&
          'absolute -translate-x-1/3 bg-gray-800 rounded-md'
        }`}
        onMouseLeave={() => setLikeHovered(false)}
        onMouseEnter={() => setLikeHovered(true)}>
        {likeHovered && <DoubleLike size={size} contentToDoubleLike={contentToLike} />}
        <ActionBtnWrapper
          tooltipText="I like this"
          onClick={() => console.log(`You liked ${contentToLike.title}`)}>
          <ThumbsUpIcon size={size || 16} strokeWidth={1.5} color="white" />
        </ActionBtnWrapper>
        {likeHovered && <DisLike size={size} contentToDislike={contentToLike} />}
      </div>
    </div>
  );
};

export default Like;
