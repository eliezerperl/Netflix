import { Content } from '@/models/content';
import { PlayIcon } from 'lucide-react';
import { useNavigate } from '@/utils/imports';
import ActionBtnWrapper from '@/utils/components/shared/ActionBtnWrapper';

type Props = {
  contentToPlay: Content;
  size?: number;
  className?: string;
  children?: React.ReactNode;
};

const Play = ({ contentToPlay, size, className, children }: Props) => {
  const navigate = useNavigate();

  const play = (content: Content) => {
    navigate(`/browse/${content.title}`);
  };

  return (
    <>
      <ActionBtnWrapper
        className={`bg-white flex items-center ${className}`}
        onClick={() => play(contentToPlay)}>
        <PlayIcon size={size || 16} fill="black" />
        {children}
      </ActionBtnWrapper>
    </>
  );
};

export default Play;
