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
        <>
          {/* div to not be able to interact with player */}
          <div className="absolute top-0 left-0 w-full h-full bg-transparent z-50" />
          <ReactPlayer
            url={`${contentURL}`}
            muted
            loop
            width={'100%'}
            height={'100%'}
            onStart={() => show && show(true)}
            playing={hovered}
          />
        </>
      )}
    </>
  );
};

export default ContentPlayer;
