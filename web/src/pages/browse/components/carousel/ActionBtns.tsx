import Play from './buttons/Play';
import DeleteFromMyList from './buttons/DeleteFromMyList';
import AddToMyList from './buttons/AddToMyList';
import { Content } from '@/models/content';
import LikeBtn from './buttons/LikeBtn';

type Props = {
  content: Content;
  myList: Content[];
  size?: number;
  squarePlay?: boolean;
};

const ActionBtns = ({ content, myList, size, squarePlay }: Props) => {
  return (
    <>
      <div className="flex gap-1">
        {!squarePlay ? (
          <Play size={size} contentToPlay={content} />
        ) : (
          <Play
            className="rounded-sm px-3 hover:bg-opacity-80"
            size={size}
            contentToPlay={content}>
            <span className="text-black pr-4 font-bold">Play</span>
          </Play>
        )}
        {myList.some((item) => item.title === content.title) ? (
          <DeleteFromMyList size={size} contentToDelete={content} />
        ) : (
          <AddToMyList size={size} contentToAdd={content} />
        )}
        <LikeBtn size={size} contentToLike={content} />
      </div>
    </>
  );
};

export default ActionBtns;
