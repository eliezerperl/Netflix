import { Content } from '@/models/content';
import { PlayIcon } from 'lucide-react';
import { useNavigate } from '@/utils/imports';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';

type Props = {
  contentToPlay: Content;
  size?: number;
};

const Play = ({ contentToPlay, size }: Props) => {
  const navigate = useNavigate();

  const play = (content: Content) => {
    navigate(`/browse/${content.title}`);
  };

  return (
    <>
      <ActionBtnWrapper
        className="bg-white"
        onClick={() => play(contentToPlay)}>
        <PlayIcon size={size || 16} fill="black" />
      </ActionBtnWrapper>
    </>
  );
};

export default Play;
