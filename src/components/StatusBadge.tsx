import React from 'react';

interface StatusBadgeProps {
  status: 'live' | 'offline';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const isLive = status === 'live';
  
  return (
    <div className={`justify-center items-center border self-stretch flex gap-2.5 text-base font-medium whitespace-nowrap leading-7 my-auto px-4 py-1 rounded-[100px] border-solid ${
      isLive 
        ? 'border-green-500 text-green-500 bg-green-50' 
        : 'border-red-500 text-red-500 bg-red-50'
    }`}>
      <div className={`aspect-[1/1] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%] ${
        isLive ? 'bg-green-500 fill-green-500' : 'bg-red-500 fill-red-500'
      }`} />
      <div className="self-stretch my-auto">
        {isLive ? 'Live' : 'Offline'}
      </div>
    </div>
  );
};
