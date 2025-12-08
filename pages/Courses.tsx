import React from 'react';
import { BookOpen, GraduationCap, Trophy, Monitor, CheckCircle2 } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses & Programs</h1>
          <p className="text-xl text-gray-600">Comprehensive coaching for School, College, and Competitive Exams.</p>
        </div>

        {/* 1. School Tuitions */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-600 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-amber-300" />
              School Tuitions (Class 1 to 12)
            </h2>
            <p className="text-blue-100 mt-2">Complete subject-wise coaching for all grades.</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Class 10 (SSLC) – All Subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Class 12 (HSC) – All Subjects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">Special coaching for Mathematics & Science</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Personalized attention for slow learners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-700">Regular tests & performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. College-Level Coaching */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-600 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-amber-300" />
              College-Level Coaching
            </h2>
            <p className="text-blue-100 mt-2">Expert tuition for undergraduate and postgraduate programs.</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Engineering</h3>
                <p className="text-blue-600 font-medium">B.E. – All Mathematics Papers</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Arts & Science (UG)</h3>
                <p className="text-blue-600 font-medium">B.A., B.Sc., B.Com</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Postgraduate (PG)</h3>
                <p className="text-blue-600 font-medium">M.A., M.Sc., M.Com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Competitive Exam Coaching */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-600 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Trophy className="w-8 h-8 text-amber-300" />
              Competitive Exam Coaching
            </h2>
            <p className="text-blue-100 mt-2">Special training programs for major government and entrance exams.</p>
          </div>
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {[
                "TRB, TET, NET (Teacher Recruitment & Eligibility)",
                "NEET, JEE (Medical & Engineering Entrance)",
                "All Bank Exams & Other Entrance Exams",
                "Police Exam Coaching"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 p-6 rounded-xl flex items-center justify-center text-center">
              <p className="text-blue-800 font-medium">
                "Our structured study plans, practice tests, and expert trainers help students crack exams confidently."
              </p>
            </div>
          </div>
        </div>

        {/* 4. Additional Courses */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-8 h-8 text-amber-300" />
              Additional Courses
            </h2>
            <p className="text-blue-100 mt-2">Enhance your skills with our value-added programs.</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Computer Courses", "Spoken English Training", "Hindi Classes", "Personality Development"].map((course, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <span className="font-bold text-gray-800 block">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;