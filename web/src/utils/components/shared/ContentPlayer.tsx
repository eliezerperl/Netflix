import ReactPlayer from 'react-player/youtube';

type Props = {
  contentURL: string;
  hovered?: boolean | null;
  show?: (ready: boolean) => void;
  withoutOverlay?: boolean;
  withControls?: boolean;
};

const ContentPlayer = ({
  contentURL,
  hovered,
  show,
  // withoutOverlay,
  withControls,
}: Props) => {
  return (
    <>
      {hovered && (
        <>
          {/* div to not be able to interact with player 
          {!withoutOverlay && (
            <div className="absolute top-0 left-0 w-full h-full bg-transparent z-50" />
          )} */}

          <ReactPlayer
            url={`${contentURL}`}
            controls={withControls}
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
