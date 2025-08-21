import React, { useState } from 'react';
import { FormCard } from '../FormCard';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  selected: boolean;
}

interface FAQFormProps {
  faqs: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}

export const FAQForm: React.FC<FAQFormProps> = ({ faqs, onChange }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleFAQToggle = (id: string) => {
    const updatedFAQs = faqs.map(faq =>
      faq.id === id ? { ...faq, selected: !faq.selected } : faq
    );
    onChange(updatedFAQs);
  };

  const handleAddFAQ = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      const newFAQ: FAQ = {
        id: Date.now().toString(),
        question: newQuestion,
        answer: newAnswer,
        selected: false
      };
      onChange([...faqs, newFAQ]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <FormCard className="items-stretch">
      <div className="flex w-full flex-col max-md:max-w-full">
        <h3 className="text-black text-lg font-semibold leading-loose self-stretch">FAQ</h3>
        
        {faqs.map((faq) => (
          <div key={faq.id} className="flex gap-5 font-semibold justify-center flex-wrap mt-3 max-md:max-w-full">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={faq.selected}
                onChange={() => handleFAQToggle(faq.id)}
                className="aspect-[1/1] border w-6 h-6 rounded-sm border-2 border-solid"
              />
            </label>
            <div className="min-w-60 w-[590px] max-md:max-w-full">
              <div className="text-black text-lg leading-none tracking-[-0.14px]">
                {faq.question}
              </div>
              <div className="text-gray-500 text-sm leading-none tracking-[-0.07px] mt-1 max-md:max-w-full">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
        
        <form onSubmit={(e) => { e.preventDefault(); handleAddFAQ(); }} className="self-stretch flex w-full gap-5 text-lg leading-loose flex-wrap mt-3 max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="newQuestion" className="text-black font-semibold block">
              Question
            </label>
            <input
              id="newQuestion"
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your question"
            />
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <label htmlFor="newAnswer" className="text-black font-semibold block">
              Answer
            </label>
            <input
              id="newAnswer"
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              className="items-center border flex w-full gap-2.5 text-gray-500 font-medium mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter an answer to your question"
            />
          </div>
        </form>
        
        <button
          type="button"
          onClick={handleAddFAQ}
          className="items-center flex gap-2.5 text-base text-white font-medium leading-7 bg-black mt-3 px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors w-fit"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/c5da799bd4e348a4bb349c75d96f3926/74b1fdf4f57e4ebf1f7643826b6b86b9d50d043f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Add"
          />
          <span className="text-white self-stretch my-auto">Add FAQ</span>
        </button>
      </div>
    </FormCard>
  );
};
