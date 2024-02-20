import { Card, CardContent } from '@/components/ui/card';
import { Content } from '@/models/content';
import ContentPlayer from '@/utils/components/shared/ContentPlayer';
import { useState } from '@/utils/imports';
import AddToMyList from './buttons/AddToMyList';
import DeleteFromMyList from './buttons/DeleteFromMyList';
import { useStoreContext } from '@/utils/context/StoreContext';
import Play from './buttons/Play';
import { TrashIcon } from 'lucide-react';

type Props = {
  content: Content;
};

const BrowseItem = ({ content }: Props) => {
  const { state } = useStoreContext();
  const { myList } = state;
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`relative p-1 ${hovered ? 'z-10' : ''}`}>
      <Card
        className={`bg-transparent border-none ${
          hovered
            ? 'transform transition-transform duration-500 hover:scale-150'
            : ''
        }`}>
        <CardContent className="flex aspect-square items-center justify-center">
          {!hovered ? (
            <img
              // onMouseEnter={() => setHovered(true)}
              className='hover:transform transition-transform duration-500 hover:scale-150 hover:z-10'
              src={content.imgThumb}
              alt={content.title}
            />
          ) : (
            <div
              // onMouseLeave={() => setHovered(false)}
              className="absolute top-0">
              <ContentPlayer contentURL={content.trailer} />
              <div className="absolute bottom-0 h-9 w-full bg-black flex justify-between">
                <div className="flex gap-1 p-1">
                  <Play contentToPlay={content} />
                  {myList.some((item) => item.title === content.title) ? (
                    <DeleteFromMyList contentToDelete={content} />
                  ) : (
                    <AddToMyList contentToAdd={content} />
                  )}
                </div>
                <div
                  onClick={() => {
                    console.log(myList);
                    console.log(content);
                    console.log(myList.includes(content));
                  }}
                  className="border border-gray-400 rounded-full size-fit p-1 m-1">
                  <TrashIcon size={16} strokeWidth={1.5} color="white" />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BrowseItem;
