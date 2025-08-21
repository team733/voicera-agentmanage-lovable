import React from 'react';

interface SectionHeaderProps {
  icon: string;
  title: string;
  description: string;
  onRefresh: () => void;
  onSave: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon, 
  title, 
  description, 
  onRefresh, 
  onSave 
}) => {
  return (
    <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap mt-7 max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col items-stretch my-auto max-md:max-w-full">
        <div className="flex items-center gap-1 justify-center">
          <div className="self-stretch flex items-center gap-2 w-6 my-auto">
            <img
              src={icon}
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Section icon"
            />
          </div>
          <h2 className="text-black text-xl font-semibold leading-[1.4] tracking-[-0.1px] self-stretch my-auto">
            {title}
          </h2>
        </div>
        <p className="text-gray-500 text-lg font-semibold leading-loose mt-1 max-md:max-w-full">
          {description}
        </p>
      </div>
      
      <div className="self-stretch flex min-w-60 items-center gap-3 text-base font-medium leading-7 my-auto">
        <button 
          onClick={onRefresh}
          className="items-center border border self-stretch flex gap-2.5 text-black whitespace-nowrap bg-white my-auto px-4 py-2 rounded-xl border-solid hover:bg-gray-50 transition-colors"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/c1562eb1b59e448124d016524bc34affe04d7b68?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Refresh"
          />
          <span className="text-black self-stretch my-auto">Refresh</span>
        </button>
        
        <button 
          onClick={onSave}
          className="items-center self-stretch flex gap-2.5 text-white bg-black my-auto px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b0c333fcf274d162b6b4fa7761be75bd9ef09c15?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Save"
          />
          <span className="text-white self-stretch my-auto">Save Changes</span>
        </button>
      </div>
    </div>
  );
};
