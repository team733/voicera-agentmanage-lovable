import React from 'react';

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FormCard: React.FC<FormCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border w-full text-lg leading-loose bg-white mt-7 p-5 rounded-[20px] border-solid max-md:max-w-full ${className}`}>
      {children}
    </div>
  );
};
