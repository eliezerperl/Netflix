import { Content } from '@/models/content';
import { useStoreContext } from '@/utils/context/StoreContext';
import { CheckIcon } from 'lucide-react';
import { toast } from '@/utils/imports';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { REMOVED_FROM_LIST } from '@/utils/actions/Actions';
import { removeFromList } from '@/lib/utils';

type Props = {
  contentToDelete: Content;
  size?: number;
};

const DeleteFromMyList = ({ contentToDelete, size }: Props) => {
  const { state, dispatch } = useStoreContext();
  const { userInfo } = state;

  const del = (content: Content) => {
    if (userInfo) {
      const indexToDelete = userInfo.list.indexOf(content);
      userInfo.list.splice(indexToDelete, 1);
      removeFromList(userInfo._id, content);
      dispatch({ type: REMOVED_FROM_LIST, payload: userInfo });
      toast.success(`${content.title} has been removed from your list`);
    }
  };

  return (
    <>
      <ActionBtnWrapper
        tooltipText="Remove from My List"
        onClick={() => del(contentToDelete)}>
        <CheckIcon size={size || 16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default DeleteFromMyList;
