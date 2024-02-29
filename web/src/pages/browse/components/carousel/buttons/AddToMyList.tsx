import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { toast } from '@/utils/imports';
import { PlusIcon } from 'lucide-react';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ADDED_TO_LIST } from '@/utils/actions/Actions';
import { addToList } from '@/lib/utils';

type Props = {
  contentToAdd: Content;
  size?: number;
};

const AddToMyList = ({ contentToAdd, size }: Props) => {
  const { state, dispatch } = useStoreContext();
  const { userInfo } = state;

  const add = (content: Content) => {
    if (userInfo) {
      userInfo.list.push(content);
      addToList(userInfo._id, content);
      dispatch({ type: ADDED_TO_LIST, payload: userInfo });
      toast.success(`${content.title} has been added to your list`);
    }
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
