import React from 'react';
import { FormCard } from '../FormCard';

interface BookingData {
  services: string;
  appointmentDuration: string;
  businessDays: string[];
  startTime: string;
  endTime: string;
  fullScheduleAction: string;
}

interface BookingFormProps {
  data: BookingData;
  onChange: (data: BookingData) => void;
}

const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

export const BookingForm: React.FC<BookingFormProps> = ({ data, onChange }) => {
  const handleInputChange = (field: keyof BookingData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleDayToggle = (day: string) => {
    const updatedDays = data.businessDays.includes(day)
      ? data.businessDays.filter(d => d !== day)
      : [...data.businessDays, day];
    onChange({ ...data, businessDays: updatedDays });
  };

  return (
    <FormCard>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="services" className="text-black font-semibold block">
              What can customers book?
            </label>
            <div className="relative">
              <select
                id="services"
                value={data.services}
                onChange={(e) => handleInputChange('services', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="">Select the services you want your customers to book</option>
                <option value="haircut">Haircut</option>
                <option value="beard-trim">Beard Trim</option>
                <option value="full-service">Full Service</option>
              </select>
              <img
                src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b073ad47d1f06b8fbe897f728682b0625dae164c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                alt="Dropdown arrow"
              />
            </div>
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="appointmentDuration" className="text-black font-semibold block">
              How long is each appointment?
            </label>
            <div className="relative">
              <select
                id="appointmentDuration"
                value={data.appointmentDuration}
                onChange={(e) => handleInputChange('appointmentDuration', e.target.value)}
                className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
              >
                <option value="">Select the duration you want each appointment to last</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
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
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <fieldset>
              <legend className="text-black font-semibold">Select your business days</legend>
              <div className="flex gap-3 text-gray-500 font-medium whitespace-nowrap flex-wrap mt-6 max-md:max-w-full">
                {daysOfWeek.map((day) => (
                  <label key={day} className="items-center border flex gap-2.5 px-4 py-2.5 rounded-xl border-2 border-solid cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={data.businessDays.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="sr-only"
                    />
                    <span className={`text-gray-500 ${data.businessDays.includes(day) ? 'font-bold' : ''}`}>
                      {day}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <fieldset>
              <legend className="text-black font-semibold">Enter your business hours</legend>
              <div className="flex w-full gap-3 text-gray-500 font-medium whitespace-nowrap flex-wrap mt-3 max-md:max-w-full">
                <div className="relative flex-1">
                  <input
                    type="time"
                    value={data.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="justify-between items-center border flex min-w-60 gap-[40px_100px] w-full p-4 rounded-xl border-2 border-solid focus:outline-none focus:border-blue-500"
                    placeholder="From"
                  />
                </div>
                <div className="relative flex-1">
                  <input
                    type="time"
                    value={data.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="justify-between items-center border flex min-w-60 gap-[40px_100px] w-full p-4 rounded-xl border-2 border-solid focus:outline-none focus:border-blue-500"
                    placeholder="To"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        
        <div className="min-h-[104px] w-full mt-5 max-md:max-w-full">
          <label htmlFor="fullScheduleAction" className="text-black font-semibold block">
            If your schedule is full, what should the AI do?
          </label>
          <div className="relative">
            <select
              id="fullScheduleAction"
              value={data.fullScheduleAction}
              onChange={(e) => handleInputChange('fullScheduleAction', e.target.value)}
              className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 font-medium flex-wrap mt-4 p-4 rounded-xl border-2 border-solid max-md:max-w-full appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Options</option>
              <option value="waitlist">Add to waitlist</option>
              <option value="reschedule">Offer to reschedule</option>
              <option value="callback">Schedule a callback</option>
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
