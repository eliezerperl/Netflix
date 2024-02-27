import { InfoIcon } from 'lucide-react';
import Play from './carousel/buttons/Play';
import { Content } from '@/models/content';
import Info from './carousel/buttons/Info';

type Props = {
  content: Content;
  size?: number;
};

const HeroActionBtns = ({ content, size }: Props) => {
  return (
    <>
      <div className="flex gap-4">
        <Play
          className="rounded-sm px-3 hover:bg-opacity-80"
          size={size}
          contentToPlay={content}>
          <span className="text-black pr-4 font-bold">Play</span>
        </Play>

        <Info
          contentToShow={content}
          className="flex justify-center items-center p-3 gap-3 bg-gray-400 bg-opacity-60 rounded-sm hover:bg-opacity-40 hover:border-none"
          diffIcon notTooltip>
          {size && <InfoIcon size={size / 1.5} />}
          <span className="font-bold">More Info</span>
        </Info>
      </div>
    </>
  );
};

export default HeroActionBtns;
