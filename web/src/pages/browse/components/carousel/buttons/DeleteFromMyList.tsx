import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { CheckIcon } from 'lucide-react';
import { toast } from '@/utils/imports';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { REMOVED_FROM_LIST } from '@/utils/actions/Actions';

type Props = {
  contentToDelete: Content;
  className?: string
};

const DeleteFromMyList = ({ contentToDelete, className }: Props) => {
  const { state, dispatch } = useStoreContext();
  const { myList } = state;

  const del = (content: Content) => {
    const indexToDelete = myList.indexOf(content);
    myList.splice(indexToDelete, 1);
    dispatch({ type: REMOVED_FROM_LIST });
    localStorage.setItem('myList', JSON.stringify(myList));
    toast.success(`${content.title} has been removed from your list`);
  };

  return (
    <>
      <ActionBtnWrapper
      className={`${className}`}
        tooltipText="Remove from My List"
        onClick={() => del(contentToDelete)}>
        <CheckIcon size={16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default DeleteFromMyList;
