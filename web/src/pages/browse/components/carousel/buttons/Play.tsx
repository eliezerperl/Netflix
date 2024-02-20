import { Content } from '@/models/content';
import { PlayIcon } from 'lucide-react';
import { useNavigate } from '@/utils/imports';
import ActionBtnWrapper from './ActionBtnWrapper';

type Props = {
  contentToPlay: Content;
};

const Play = ({ contentToPlay }: Props) => {
  const navigate = useNavigate();

  const play = (content: Content) => {
    navigate(`/browse/${content.title}`);
  };

  return (
    <>
      <ActionBtnWrapper
        className="bg-white border-none"
        onClick={() => play(contentToPlay)}>
        <PlayIcon size={16} fill="black" />
      </ActionBtnWrapper>
    </>
  );
};

export default Play;
