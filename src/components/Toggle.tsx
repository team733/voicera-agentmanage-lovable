import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-500 text-lg font-semibold leading-none">No</span>
      <button
        onClick={() => onChange(!checked)}
        className="items-center flex bg-gray-200 p-0.5 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        role="switch"
        aria-checked={checked}
        aria-label={label}
      >
        <div className={`w-6 h-6 rounded-[100px] transition-all ${
          checked ? 'bg-black ml-6' : 'bg-transparent'
        }`} />
        <div className={`w-6 h-6 rounded-[100px] transition-all ${
          checked ? 'bg-transparent' : 'bg-black mr-6'
        }`} />
      </button>
      <span className="text-gray-500 text-lg font-semibold leading-none">Yes</span>
    </div>
  );
};
