import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast } from '@/utils/imports';
import { PlusIcon } from 'lucide-react';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ADDED_TO_LIST } from '@/utils/actions/Actions';

type Props = {
  contentToAdd: Content;
  size?: number;
};

const AddToMyList = ({ contentToAdd, size }: Props) => {
  const { state, dispatch } = useStoreContext();
  const { myList } = state;

  const add = (content: Content) => {
    myList.push(content);
    dispatch({ type: ADDED_TO_LIST });
    localStorage.setItem('myList', JSON.stringify(myList));
    toast.success(`${content.title} has been added to your list`);
  };

  return (
    <>
      <ActionBtnWrapper
        tooltipText="Add to My List"
        onClick={() => add(contentToAdd)}>
        <PlusIcon size={size || 16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default AddToMyList;
