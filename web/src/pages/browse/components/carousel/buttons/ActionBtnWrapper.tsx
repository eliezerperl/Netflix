import React from 'react';

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
  return (
    <div
      data-tooltip={tooltipText}
      className={`cursor-pointer border border-gray-400 rounded-full p-1 size-fit hover:border-white ${
        tooltipText && 'tooltip'
      } ${className}`}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionBtnWrapper;
