import { Content } from '@/models/content';
import DisLike from './DisLike';
import DoubleLike from './DoubleLike';
import { useState } from '@/utils/imports';
import Like from './Like';

type Props = {
  contentToLike: Content;
  size?: number;
};

const LikeBtn = ({ contentToLike, size }: Props) => {
  const [likeHovered, setLikeHovered] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className={`flex flex-row-reverse gap-1 ${
          likeHovered &&
          'absolute -translate-x-1/3 bg-gray-800 rounded-md transition'
        }`}
        onMouseLeave={() => setLikeHovered(false)}
        onMouseEnter={() => setLikeHovered(true)}>
        {likeHovered ? (
          <>
            <DoubleLike size={size} contentToDoubleLike={contentToLike} />
            <Like size={size} contentToLike={contentToLike} />
            <DisLike size={size} contentToDislike={contentToLike} />
          </>
        ) : (
          <Like size={size} contentToLike={contentToLike} />
        )}
      </div>
    </div>
  );
};

export default LikeBtn;
