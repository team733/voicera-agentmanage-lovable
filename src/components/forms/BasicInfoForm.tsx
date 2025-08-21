import React, { useState } from 'react';
import { FormCard } from '../FormCard';

interface BasicInfoData {
  businessName: string;
  businessType: string;
  primaryLocation: string;
  businessHours: string;
}

interface BasicInfoFormProps {
  data: BasicInfoData;
  onChange: (data: BasicInfoData) => void;
}

export const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof BasicInfoData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <FormCard>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="businessName" className="text-black font-semibold block">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              value={data.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="The Gents' Chair"
            />
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="businessType" className="text-black font-semibold block">
              Business Type
            </label>
            <div className="relative">
              <select
                id="businessType"
                value={data.businessType}
                onChange={(e) => handleInputChange('businessType', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="Barbing Saloon">Barbing Saloon</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Clinic">Clinic</option>
                <option value="Retail Store">Retail Store</option>
              </select>
              <img
                src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                alt="Dropdown arrow"
              />
            </div>
          </div>
        </div>
        
        <div className="flex w-full gap-5 flex-wrap mt-5 max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="primaryLocation" className="text-black font-semibold block">
              Primary Location
            </label>
            <input
              id="primaryLocation"
              type="text"
              value={data.primaryLocation}
              onChange={(e) => handleInputChange('primaryLocation', e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="350 5th Avenue, Suite 2100, New York, NY 10118"
            />
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="businessHours" className="text-black font-semibold block">
              Business Hours
            </label>
            <input
              id="businessHours"
              type="text"
              value={data.businessHours}
              onChange={(e) => handleInputChange('businessHours', e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="8:00am - 05:00pm"
            />
          </div>
        </div>
      </form>
    </FormCard>
  );
};
