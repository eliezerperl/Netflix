import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/ui/tooltip';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  tooltipText?: string;
  className?: string;
};

const ActionBtnWrapper = ({
  children,
  onClick,
  tooltipText,
  className,
}: Props) => {
  return tooltipText ? (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          onClick={onClick}
          className={`cursor-pointer border border-gray-400 rounded-full p-1 size-fit hover:border-white ${className}`}>
          {children}
        </TooltipTrigger>
        <TooltipContent className="transition-transform ease-in duration-200 origin-bottom">
          {tooltipText}
          <TooltipArrow fill="white" width={6} height={4} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <div
      className={`cursor-pointer border border-gray-400 rounded-full p-1 size-fit hover:border-white ${className}`}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionBtnWrapper;
