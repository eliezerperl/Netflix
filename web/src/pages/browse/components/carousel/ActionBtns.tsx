import Play from './buttons/Play';
import DeleteFromMyList from './buttons/DeleteFromMyList';
import AddToMyList from './buttons/AddToMyList';
import { Content } from '@/models/content';
import LikeBtn from './buttons/LikeBtn';

type Props = {
  content: Content;
  myList: Content[];
  size?: number;
};

const ActionBtns = ({ content, myList, size }: Props) => {
  return (
    <>
      <div className="flex gap-1">
        <Play size={size} contentToPlay={content} />
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
