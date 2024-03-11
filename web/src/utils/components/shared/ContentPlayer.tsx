import ReactPlayer from 'react-player/youtube';

type Props = {
  contentURL: string;
  hovered?: boolean | null;
  show?: (ready: boolean) => void;
  withoutOverlay?: boolean;
  withControls?: boolean;
};

const ContentPlayer = ({ contentURL, hovered, show, withControls }: Props) => {
  return (
    <>
      {hovered && (
        <>
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
