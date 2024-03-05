import ReactPlayer from 'react-player/youtube';

type Props = {
  contentURL: string;
  hovered?: boolean | null;
  show?: (ready: boolean) => void;
};

const ContentPlayer = ({ contentURL, hovered, show }: Props) => {
  return (
    <>
      {hovered && (
        <ReactPlayer
          url={contentURL}
          muted={true}
          width={'100%'}
          height={'100%'}
          onStart={() => show && show(true)}
          playing={hovered}
        />
      )}
    </>
  );
};

export default ContentPlayer;
