import React from 'react';
import { ShieldCheck, Clock, UserCheck, Activity, Users } from 'lucide-react';

const Policies: React.FC = () => {
   return (
      <div className="bg-white min-h-screen py-12">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic & Behavioral Policies</h1>
               <p className="text-lg text-gray-600">To maintain a positive and productive learning environment, Bright Tutorials follows strict educational policies.</p>
            </div>

            <div className="space-y-6">
               <div className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                     <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Attendance</h3>
                     <p className="text-gray-700">Students must attend classes regularly to ensure consistent progress. Absences should be communicated in advance whenever possible.</p>
                  </div>
               </div>

               <div className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                     <UserCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Code of Conduct</h3>
                     <p className="text-gray-700">Respectful behavior towards teachers, staff, and fellow students is mandatory. Discipline is key to a good learning atmosphere.</p>
                  </div>
               </div>

               <div className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                     <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Assessments</h3>
                     <p className="text-gray-700">We conduct weekly and monthly assessments to monitor performance and give constructive feedback to help students improve.</p>
                  </div>
               </div>

               <div className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                     <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Parental Engagement</h3>
                     <p className="text-gray-700">We conduct frequent parent-teacher meetings to discuss students' progress and identify improvement areas together.</p>
                  </div>
               </div>

               <div className="flex gap-4 p-6 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 mt-1">
                     <ShieldCheck className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Safety</h3>
                     <p className="text-gray-700">Our institute is committed to providing a safe, secure, and hygienic learning environment for all students.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Policies;