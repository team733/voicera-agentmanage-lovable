import React from 'react';
import { FormCard } from '../FormCard';

interface AIPersonalityData {
  voiceStyle: string;
  assistantName: string;
  answeringHours: string;
  greetingStyle: string;
}

interface AIPersonalityFormProps {
  data: AIPersonalityData;
  onChange: (data: AIPersonalityData) => void;
}

export const AIPersonalityForm: React.FC<AIPersonalityFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof AIPersonalityData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <FormCard>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="voiceStyle" className="text-black font-semibold block">
              AI voice style
            </label>
            <div className="relative">
              <select
                id="voiceStyle"
                value={data.voiceStyle}
                onChange={(e) => handleInputChange('voiceStyle', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="Friendly Female">Friendly Female</option>
                <option value="Professional Male">Professional Male</option>
                <option value="Warm Female">Warm Female</option>
                <option value="Confident Male">Confident Male</option>
              </select>
              <img
                src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                alt="Dropdown arrow"
              />
            </div>
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="assistantName" className="text-black font-semibold block">
              AI assistant name
            </label>
            <input
              id="assistantName"
              type="text"
              value={data.assistantName}
              onChange={(e) => handleInputChange('assistantName', e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="Your [Business Name] Assistant"
            />
          </div>
        </div>
        
        <div className="w-full mt-5 max-md:max-w-full">
          <label htmlFor="answeringHours" className="text-black font-semibold block">
            Answering Hours
          </label>
          <div className="relative">
            <select
              id="answeringHours"
              value={data.answeringHours}
              onChange={(e) => handleInputChange('answeringHours', e.target.value)}
              className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="During business hours">During business hours</option>
              <option value="24/7">24/7</option>
              <option value="Custom hours">Custom hours</option>
            </select>
            <img
              src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              alt="Dropdown arrow"
            />
          </div>
        </div>
        
        <div className="w-full mt-5 max-md:max-w-full">
          <label htmlFor="greetingStyle" className="text-black font-semibold block">
            AI greeting style
          </label>
          <div className="relative">
            <select
              id="greetingStyle"
              value={data.greetingStyle}
              onChange={(e) => handleInputChange('greetingStyle', e.target.value)}
              className="justify-between border flex w-full text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value={"Warm & Reassuring: \"Hello, you're through to [Business Name]. I'm here to help, how can I assist?\""}>
                Warm & Reassuring: "Hello, you're through to [Business Name]. I'm here to help, how can I assist?"
              </option>
              <option value={"Professional: \"Good [morning/afternoon], [Business Name]. How may I assist you today?\""}>
                Professional: "Good [morning/afternoon], [Business Name]. How may I assist you today?"
              </option>
              <option value={"Friendly: \"Hi there! Thanks for calling [Business Name]. What can I do for you?\""}>
                Friendly: "Hi there! Thanks for calling [Business Name]. What can I do for you?"
              </option>
            </select>
            <img
              src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              alt="Dropdown arrow"
            />
          </div>
        </div>
      </form>
    </FormCard>
  );
};
