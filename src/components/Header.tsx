import React from 'react';

interface HeaderProps {
  agentStatus: 'live' | 'offline';
  onStatusChange: (status: 'live' | 'offline') => void;
  onTestAgent: () => void;
}

export const Header: React.FC<HeaderProps> = ({ agentStatus, onStatusChange, onTestAgent }) => {
  return (
    <header className="justify-between items-center relative flex min-h-[92px] w-full text-lg font-semibold leading-loose bg-white px-16 py-[22px] border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="text-black text-2xl leading-none tracking-[-0.14px] self-stretch z-0 my-auto">
        Voicera AI
      </div>
      
      <div className="self-stretch z-0 flex min-w-60 items-center gap-8 my-auto">
        <div className="justify-center items-center border border self-stretch flex gap-2.5 text-black my-auto px-4 py-2 rounded-lg border-solid">
          <div className={`aspect-[1/1] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-[50%] ${agentStatus === 'live' ? 'bg-green-500 fill-green-500' : 'bg-red-500 fill-red-500'}`} />
          <img
            src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/a90840b2173f95a60698856d05776b87bb317e12?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Agent icon"
          />
          <div className="self-stretch my-auto">
            Agent {agentStatus === 'live' ? 'Live' : 'Offline'}
          </div>
        </div>
        
        <img
          src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/c6c4714dd41e76289596e83a8a3bf1bf28889108?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Notification"
        />
        
        <div className="self-stretch flex items-center gap-5 text-gray-800 whitespace-nowrap my-auto">
          <div className="justify-center items-center self-stretch flex min-h-12 gap-3 w-12 h-12 bg-gray-100 my-auto px-3 rounded-[100px]">
            <div className="text-gray-800 self-stretch my-auto">H</div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt="Dropdown"
          />
        </div>
      </div>
      
      <nav className="absolute z-0 flex min-w-60 gap-3 text-gray-500 -translate-x-2/4 translate-y-[0%] bg-gray-100 p-2 rounded-[100px] left-2/4 bottom-4 max-md:max-w-full">
        <button className="flex items-center gap-2.5 whitespace-nowrap justify-center px-4 py-2 rounded-[100px] hover:bg-white transition-colors">
          <div className="text-gray-500 self-stretch my-auto">Dashboard</div>
        </button>
        <button className="flex items-center gap-2.5 justify-center px-4 py-2 rounded-[100px] hover:bg-white transition-colors">
          <div className="text-gray-500 self-stretch my-auto">Call Logs</div>
        </button>
        <button className="flex items-center gap-2.5 justify-center px-4 py-2 hover:bg-white transition-colors">
          <div className="text-gray-500 self-stretch my-auto">Daily Summary</div>
        </button>
      </nav>
    </header>
  );
};
