import React from 'react';
import { Book, HelpCircle, Laptop, FileText, ClipboardList, BrainCircuit } from 'lucide-react';

const Support: React.FC = () => {
  const services = [
    {
      title: "Library",
      desc: "A well-equipped library with essential textbooks, guides, sample papers, and reference books.",
      icon: <Book className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Doubt Clearing",
      desc: "Regular faculty-led sessions to clarify concepts and ensure complete understanding.",
      icon: <HelpCircle className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Online Resources",
      desc: "Access to digital notes, e-learning platforms, and extra learning materials for practice.",
      icon: <Laptop className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Study Materials",
      desc: "Updated chapter-wise notes, solved examples, and examination guides.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Mock Tests",
      desc: "Weekly and monthly mock tests to track academic progress and improve exam readiness.",
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Counseling",
      desc: "Academic guidance, stress management support, and career recommendations.",
      icon: <BrainCircuit className="w-8 h-8 text-white" />,
      color: "bg-blue-600"
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Support Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            To help students excel, Bright Tutorials provides multiple value-added services designed for holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className={`${service.color} p-6 flex justify-center items-center h-24`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;