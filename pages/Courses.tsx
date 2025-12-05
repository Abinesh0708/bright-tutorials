import React from 'react';
import { BookOpen, PenTool, Calculator, Beaker, Globe } from 'lucide-react';

const Courses: React.FC = () => {
  const schoolSubjects = [
    { name: 'Biology', icon: <Beaker className="w-5 h-5" /> },
    { name: 'Chemistry', icon: <Beaker className="w-5 h-5" /> },
    { name: 'Physics', icon: <Beaker className="w-5 h-5" /> },
    { name: 'Mathematics', icon: <Calculator className="w-5 h-5" /> },
    { name: 'Accounts', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Commerce', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Social Studies', icon: <Globe className="w-5 h-5" /> },
    { name: 'Science', icon: <Beaker className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses & Programs</h1>
          <p className="text-xl text-gray-600">Structured and syllabus-aligned coaching for all levels.</p>
        </div>

        {/* School Level */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-600 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-amber-300" />
              School Level Coaching
            </h2>
            <p className="text-blue-100 mt-2">
              We support students across major academic levels (Class VIII, X, XI, XII).
            </p>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 border-b pb-2">Subjects Taught</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {schoolSubjects.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="text-blue-600">{sub.icon}</div>
                  <span className="font-medium text-gray-700">{sub.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-100">
              <p className="text-amber-800 italic text-center font-medium">
                "Each subject is taught by experienced educators who focus on clear explanations, problem-solving skills, and exam-oriented preparation."
              </p>
            </div>
          </div>
        </div>

        {/* Polytechnic */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-slate-800 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <PenTool className="w-8 h-8 text-amber-300" />
              Higher Education Assistance
            </h2>
            <p className="text-slate-300 mt-2">
              Polytechnic Coaching for technical excellence.
            </p>
          </div>
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Engineering Mathematics</h4>
                    <p className="text-sm text-gray-600">Simplifying complex calculations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Engineering Basics</h4>
                    <p className="text-sm text-gray-600">Fundamental concepts for strong technical roots.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Exam Preparation</h4>
                    <p className="text-sm text-gray-600">Past-year question practice and continuous assessments.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <img src="/images/courses.jpg" alt="Technical drawing" className="rounded-lg object-cover h-full w-full shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;