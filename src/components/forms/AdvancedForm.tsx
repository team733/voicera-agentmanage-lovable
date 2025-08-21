import React from 'react';
import { FormCard } from '../FormCard';
import { Toggle } from '../Toggle';

interface AdvancedData {
  unknownQuestionAction: string;
  dailySummary: boolean;
  emailConfirmations: boolean;
  appointmentReminders: boolean;
  calendarIntegration: string;
}

interface AdvancedFormProps {
  data: AdvancedData;
  onChange: (data: AdvancedData) => void;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof AdvancedData, value: string | boolean) => {
    onChange({ ...data, [field]: value });
  };

  const handleSyncAccount = () => {
    console.log('Syncing calendar account...');
  };

  return (
    <FormCard>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
          <div className="min-w-60 text-lg flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="unknownQuestionAction" className="text-black font-semibold leading-none max-md:max-w-full block">
              How should your AI handle common questions that it can't answer?
            </label>
            <div className="relative">
              <select
                id="unknownQuestionAction"
                value={data.unknownQuestionAction}
                onChange={(e) => handleInputChange('unknownQuestionAction', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium leading-loose flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="">Select what the AI should do</option>
                <option value="transfer">Transfer to human agent</option>
                <option value="callback">Schedule a callback</option>
                <option value="email">Send information via email</option>
              </select>
              <img
                src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                alt="Dropdown arrow"
              />
            </div>
          </div>
          
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <label className="text-black text-lg font-semibold leading-none max-md:max-w-full">
              Do you want a daily summary of all calls and bookings?
            </label>
            <div className="mt-4">
              <Toggle
                checked={data.dailySummary}
                onChange={(checked) => handleInputChange('dailySummary', checked)}
                label="Daily summary toggle"
              />
            </div>
          </div>
        </div>
        
        <div className="flex w-full gap-5 flex-wrap mt-5 max-md:max-w-full">
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <label className="text-black text-lg font-semibold leading-none max-md:max-w-full">
              Should customers receive booking confirmations by Email?
            </label>
            <div className="mt-4">
              <Toggle
                checked={data.emailConfirmations}
                onChange={(checked) => handleInputChange('emailConfirmations', checked)}
                label="Email confirmations toggle"
              />
            </div>
          </div>
          
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <label className="text-black text-lg font-semibold leading-loose max-md:max-w-full">
              Would you like your AI to send automatic reminders before each appointment?
            </label>
            <div className="mt-4">
              <Toggle
                checked={data.appointmentReminders}
                onChange={(checked) => handleInputChange('appointmentReminders', checked)}
                label="Appointment reminders toggle"
              />
            </div>
          </div>
        </div>
        
        <div className="flex w-full gap-5 justify-center flex-wrap mt-5 max-md:max-w-full">
          <div className="min-w-60 text-lg leading-loose flex-1 shrink basis-8 max-md:max-w-full">
            <label htmlFor="calendarIntegration" className="text-black font-semibold block">
              Calendar Integration
            </label>
            <div className="relative">
              <select
                id="calendarIntegration"
                value={data.calendarIntegration}
                onChange={(e) => handleInputChange('calendarIntegration', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="Google Calendar">Google Calendar</option>
                <option value="Outlook Calendar">Outlook Calendar</option>
                <option value="Apple Calendar">Apple Calendar</option>
              </select>
              <img
                src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                alt="Dropdown arrow"
              />
            </div>
          </div>
          
          <button
            type="button"
            onClick={handleSyncAccount}
            className="items-center flex gap-2.5 text-base text-white font-medium leading-7 bg-black px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors self-end"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/d685d8546bfeabdfee07eda237a49691025075e7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Sync"
            />
            <span className="text-white self-stretch my-auto">Sync Account</span>
          </button>
        </div>
      </form>
    </FormCard>
  );
};
