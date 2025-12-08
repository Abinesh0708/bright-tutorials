import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Will you provide study material and notebooks?",
      a: "Yes. Essential study materials are provided as needed for better understanding and revision."
    },
    {
      q: "How do I locate Bright Tutorials?",
      a: "We are located at 12B,Mead street, college road, very near old corporation office, Nagercoil-629001."
    },
    {
      q: "How many students are there per class?",
      a: "We avoid overcrowding. Batch sizes vary based on subject demand and availability of instructors to ensure individual attention."
    },
    {
      q: "What are your class timings?",
      a: "Monday–Saturday: 9:00 AM – 7:00 PM. Sunday: Closed."
    },
    {
      q: "Do you offer one-on-one classes?",
      a: "Usually no, but special arrangements may be made if a student needs additional support. Parents can discuss this with the management."
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-blue-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">{item.q}</span>
                {openIndex === idx ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-gray-600 bg-white animate-fade-in-down">
                  <p className="border-t border-gray-100 pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please call our support.</p>
          <a href="tel:04652279887" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Call 04652 279887
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;