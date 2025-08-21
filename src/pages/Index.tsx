import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { TabNavigation } from '@/components/TabNavigation';
import { SectionHeader } from '@/components/SectionHeader';
import { StatusBadge } from '@/components/StatusBadge';
import { BasicInfoForm } from '@/components/forms/BasicInfoForm';
import { AIPersonalityForm } from '@/components/forms/AIPersonalityForm';
import { BookingForm } from '@/components/forms/BookingForm';
import { FAQForm } from '@/components/forms/FAQForm';
import { AdvancedForm } from '@/components/forms/AdvancedForm';

interface BasicInfoData {
  businessName: string;
  businessType: string;
  primaryLocation: string;
  businessHours: string;
}

interface AIPersonalityData {
  voiceStyle: string;
  assistantName: string;
  answeringHours: string;
  greetingStyle: string;
}

interface BookingData {
  services: string;
  appointmentDuration: string;
  businessDays: string[];
  startTime: string;
  endTime: string;
  fullScheduleAction: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  selected: boolean;
}

interface AdvancedData {
  unknownQuestionAction: string;
  dailySummary: boolean;
  emailConfirmations: boolean;
  appointmentReminders: boolean;
  calendarIntegration: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [agentStatus, setAgentStatus] = useState<'live' | 'offline'>('live');
  
  const [basicInfo, setBasicInfo] = useState<BasicInfoData>({
    businessName: "The Gents' Chair",
    businessType: 'Barbing Saloon',
    primaryLocation: '350 5th Avenue, Suite 2100, New York, NY 10118',
    businessHours: '8:00am - 05:00pm'
  });

  const [aiPersonality, setAIPersonality] = useState<AIPersonalityData>({
    voiceStyle: 'Friendly Female',
    assistantName: 'Your [Business Name] Assistant',
    answeringHours: 'During business hours',
    greetingStyle: 'Warm & Reassuring: "Hello, you\'re through to [Business Name]. I\'m here to help, how can I assist?"'
  });

  const [bookingData, setBookingData] = useState<BookingData>({
    services: '',
    appointmentDuration: '',
    businessDays: [],
    startTime: '',
    endTime: '',
    fullScheduleAction: ''
  });

  const [faqs, setFAQs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'Q1. Agent Management',
      answer: 'ANS1. Customize your AI agent\'s knowledge base and behavior',
      selected: false
    },
    {
      id: '2',
      question: 'Q2. Booking System',
      answer: 'ANS2. Set up appointment scheduling and availability',
      selected: false
    },
    {
      id: '3',
      question: 'Q3. Business Hours',
      answer: 'ANS3. Configure when your AI agent is available',
      selected: false
    },
    {
      id: '4',
      question: 'Q4. Voice Settings',
      answer: 'ANS4. Choose your AI agent\'s voice and personality',
      selected: false
    },
    {
      id: '5',
      question: 'Q5. Integration',
      answer: 'ANS5. Connect with your calendar and other tools',
      selected: false
    }
  ]);

  const [advancedData, setAdvancedData] = useState<AdvancedData>({
    unknownQuestionAction: '',
    dailySummary: true,
    emailConfirmations: true,
    appointmentReminders: true,
    calendarIntegration: 'Google Calendar'
  });

  const handleStatusChange = (status: 'live' | 'offline') => {
    setAgentStatus(status);
  };

  const handleTestAgent = () => {
    console.log('Testing agent...');
  };

  const handleRefresh = () => {
    console.log('Refreshing data...');
  };

  const handleSave = () => {
    console.log('Saving changes...');
    console.log('Basic Info:', basicInfo);
    console.log('AI Personality:', aiPersonality);
    console.log('Booking Data:', bookingData);
    console.log('FAQs:', faqs);
    console.log('Advanced Data:', advancedData);
  };

  const getSectionConfig = () => {
    switch (activeTab) {
      case 'basic':
        return {
          icon: 'https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/eea30efe162427a78598e447b2cc8bbae445dbee?placeholderIfAbsent=true',
          title: 'Business Information',
          description: 'Basic information about your business that the AI agent will use'
        };
      case 'personality':
        return {
          icon: 'https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/eea30efe162427a78598e447b2cc8bbae445dbee?placeholderIfAbsent=true',
          title: 'AI personality',
          description: 'Customize how your AI assistant communicates and engages with customers.'
        };
      case 'booking':
        return {
          icon: 'https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/eea30efe162427a78598e447b2cc8bbae445dbee?placeholderIfAbsent=true',
          title: 'Booking',
          description: 'Control how your calls and appointments are scheduled and managed.'
        };
      case 'faqs':
        return {
          icon: 'https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/eea30efe162427a78598e447b2cc8bbae445dbee?placeholderIfAbsent=true',
          title: 'FAQs',
          description: 'Manage the information your AI agent uses to answer questions accurately.'
        };
      case 'advanced':
        return {
          icon: 'https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/eea30efe162427a78598e447b2cc8bbae445dbee?placeholderIfAbsent=true',
          title: 'Advanced',
          description: 'Fine-tune your AI agent\'s behavior, integrations, and system controls.'
        };
      default:
        return {
          icon: '',
          title: '',
          description: ''
        };
    }
  };

  const renderActiveForm = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInfoForm data={basicInfo} onChange={setBasicInfo} />;
      case 'personality':
        return <AIPersonalityForm data={aiPersonality} onChange={setAIPersonality} />;
      case 'booking':
        return <BookingForm data={bookingData} onChange={setBookingData} />;
      case 'faqs':
        return <FAQForm faqs={faqs} onChange={setFAQs} />;
      case 'advanced':
        return <AdvancedForm data={advancedData} onChange={setAdvancedData} />;
      default:
        return null;
    }
  };

  const sectionConfig = getSectionConfig();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col overflow-hidden items-stretch w-full">
      <Header 
        agentStatus={agentStatus}
        onStatusChange={handleStatusChange}
        onTestAgent={handleTestAgent}
      />
      
      <main className="self-center w-[1600px] max-w-full mt-10 px-4">
        <section className="w-full max-md:max-w-full">
          <div className="flex w-full items-center gap-7 font-semibold max-md:max-w-full">
            <div className="self-stretch min-w-60 min-h-[68px] w-[590px] my-auto">
              <h1 className="text-black text-3xl leading-[1.2] tracking-[-0.22px]">
                Agent Management
              </h1>
              <p className="text-gray-500 text-xl leading-[1.4] tracking-[-0.1px] mt-1 max-md:max-w-full">
                Configure your AI agent and test its performance
              </p>
            </div>
          </div>
          
          <div className="flex w-full gap-[40px_100px] overflow-hidden justify-between flex-wrap mt-5 py-3 max-md:max-w-full">
            <div className="flex items-center gap-3">
              <span className="text-black text-lg font-semibold leading-loose self-stretch my-auto">
                Agent status: 
              </span>
              <StatusBadge status={agentStatus} />
            </div>
            
            <div className="flex min-w-60 items-center gap-3 text-base text-white font-medium leading-7">
              <button 
                onClick={() => handleStatusChange(agentStatus === 'live' ? 'offline' : 'live')}
                className={`items-center self-stretch flex gap-2.5 my-auto px-4 py-2 rounded-xl transition-colors ${
                  agentStatus === 'live' 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                <span className="text-white self-stretch my-auto">
                  {agentStatus === 'live' ? 'Go Offline' : 'Go Live'}
                </span>
              </button>
              
              <button 
                onClick={handleTestAgent}
                className="items-center self-stretch flex gap-2.5 bg-black my-auto px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/b0336c8ba893710a4902f9092eba17f09d9a411e?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt="Test"
                />
                <span className="text-white self-stretch my-auto">Test Agent</span>
              </button>
            </div>
          </div>
        </section>
        
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <SectionHeader
          icon={sectionConfig.icon}
          title={sectionConfig.title}
          description={sectionConfig.description}
          onRefresh={handleRefresh}
          onSave={handleSave}
        />
        
        {renderActiveForm()}
      </main>
    </div>
  );
};

export default Index;
