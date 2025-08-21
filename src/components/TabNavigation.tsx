import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'basic', label: 'Basic info' },
  { id: 'personality', label: 'AI personality' },
  { id: 'booking', label: 'Booking' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'advanced', label: 'Advanced' }
];

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="flex w-full gap-3 text-lg text-black font-semibold leading-loose flex-wrap bg-gray-200 mt-7 p-2 rounded-[100px] max-md:max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`justify-center items-center flex min-w-60 gap-2.5 flex-1 shrink basis-[0%] px-4 py-1.5 rounded-[100px] transition-all ${
            activeTab === tab.id
              ? 'shadow-[0_4px_6px_0_rgba(0,0,0,0.09)] bg-white'
              : 'hover:bg-gray-300'
          }`}
        >
          <div className="text-black self-stretch my-auto">
            {tab.label}
          </div>
        </button>
      ))}
    </nav>
  );
};
