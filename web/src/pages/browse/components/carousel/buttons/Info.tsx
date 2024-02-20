import { Content } from '@/models/content';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';
import { ChevronDownIcon } from 'lucide-react';

type Props = {
  contentToShow: Content;
};

const Info = ({ contentToShow }: Props) => {
  return (
    <>
      <ActionBtnWrapper onClick={() => console.log(contentToShow)}>
        <ChevronDownIcon size={16} strokeWidth={1.5} color="white" />
      </ActionBtnWrapper>
    </>
  );
};

export default Info;
