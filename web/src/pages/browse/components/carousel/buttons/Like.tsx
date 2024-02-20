import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ThumbsUpIcon } from 'lucide-react';
import DisLike from './DisLike';
import { useState } from '@/utils/imports';
import DoubleLike from './DoubleLike';

type Props = {
  contentToLike: Content;
};

const Like = ({ contentToLike }: Props) => {
  const [likeHovered, setLikeHovered] = useState(false);

  return (
    <div className={`relative`}>
      <div
        className={`flex flex-row-reverse gap-2 ${
          likeHovered &&
          'absolute -translate-x-1/3 bg-gray-800 rounded-md transition ease-in duration-100'
        }`}
        onMouseLeave={() => setLikeHovered(false)}
        onMouseEnter={() => setLikeHovered(true)}>
        {likeHovered && <DoubleLike contentToDoubleLike={contentToLike} />}
        <ActionBtnWrapper
          tooltipText="I like this"
          onClick={() => console.log(`You liked ${contentToLike.title}`)}>
          <ThumbsUpIcon size={16} strokeWidth={1.5} color="white" />
        </ActionBtnWrapper>
        {likeHovered && (
          <DisLike className="" contentToDislike={contentToLike} />
        )}
      </div>
    </div>
  );
};

export default Like;
