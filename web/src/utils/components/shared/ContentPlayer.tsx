import ReactPlayer from 'react-player/youtube';

type Props = {
  contentURL: string;
};

const ContentPlayer = ({ contentURL }: Props) => {
  return (
    <ReactPlayer
      url={contentURL}
      playing={true}
      muted={true}
      width={'100%'}
      height={'100%'}
    />
  );
};

export default ContentPlayer;
