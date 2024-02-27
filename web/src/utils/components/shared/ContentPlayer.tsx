import { useState } from '@/utils/imports';
import ReactPlayer from 'react-player/youtube';

type Props = {
  contentURL: string;
};

const ContentPlayer = ({ contentURL }: Props) => {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  return (
    <>
      <ReactPlayer
        url={contentURL}
        playing={isReady}
        onReady={handleReady}
        muted={true}
        width={'100%'}
        height={'100%'}
      />
    </>
  );
};

export default ContentPlayer;
