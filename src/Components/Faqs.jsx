import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "How long do I have access to the courses?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "What if I need help during the course?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      question: "How do I reset my password?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    }
  ];

  return (
    <section className="rounded-lg bg-white lg:mr-40 mb-10 p-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">FAQ</h1>
        <p className="text-gray-500 text-lg">
          Frequently asked questions
        </p>
      </header>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              <span className="text-gray-500 ml-4">
                {activeIndex === index ? (
                  <FiMinus className="transform transition-transform duration-300" />
                ) : (
                  <FiPlus className="transform transition-transform duration-300" />
                )}
              </span>
            </button>
            
            <div 
              className={`px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 overflow-hidden ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;