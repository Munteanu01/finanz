import React, { useState } from 'react';

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq w-full pt-10 ">
      <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-700 mb-10 pt-10">Întrebări frecvente</h2>
      <div className="flex flex-col gap-10">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`faq-item border-2 rounded-xl shadow bg-white transition-all duration-200 ${
                isOpen ? 'border-primaryColor bg-blue-50/30' : 'border-primaryColor/40'
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-5 text-lg font-semibold text-left text-gray-700 focus:outline-none transition-colors hover:bg-primaryColor/10 cursor-pointer"
                onClick={() => toggle(idx)}
                type="button"
                tabIndex={0}
              >
                <span className="flex-1 text-left pr-4">{item.question}</span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primaryColor' : 'rotate-0 text-primaryColor/60'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`faq-answer px-8 transition-all duration-300 text-gray-800 text-base leading-relaxed overflow-hidden ${
                  isOpen ? 'max-h-[800px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <div
                  className="faq-html prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;