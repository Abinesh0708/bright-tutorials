import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, BookOpen, Users, Trophy } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Your Pathway to <span className="text-amber-400">Academic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              {SITE_DATA.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full text-center transition shadow-lg hover:shadow-amber-500/50">
                Enroll Now
              </Link>
              <a href={`tel:${SITE_DATA.phone.replace(/\s/g, '')}`} className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full text-center transition backdrop-blur-sm">
                Call {SITE_DATA.phone}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="/images/hero.jpg"
                alt="Bright Tutorials Classroom"
                className="relative rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Why Choose Bright Tutorials?</h2>
            <p className="text-lg text-gray-600">We are committed to specific result-oriented coaching for every student.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Experienced Faculty", desc: "Qualified trainers dedicated to student success.", icon: <Users className="w-8 h-8 text-blue-600" /> },
              { title: "Individual Attention", desc: "Focused coaching for every student to ensure understanding.", icon: <CheckCircle2 className="w-8 h-8 text-blue-600" /> },
              { title: "Daily Practice & Tests", desc: "Regular practice sessions and weekly tests.", icon: <BookOpen className="w-8 h-8 text-blue-600" /> },
              { title: "Exam-focused Materials", desc: "Specialized study materials to crack exams confidently.", icon: <Trophy className="w-8 h-8 text-blue-600" /> },
              { title: "Affordable Fees", desc: "High-quality education at affordable rates with flexible timings.", icon: <CheckCircle2 className="w-8 h-8 text-blue-600" /> },
              { title: "100% Result Oriented", desc: "Proven coaching methods designed to guarantee results.", icon: <Trophy className="w-8 h-8 text-blue-600" /> },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-slate-100">
                <div className="mb-4 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
              <p className="text-slate-400 max-w-2xl">From School Tuitions to Competitive Exams, we have it all.</p>
            </div>
            <Link to="/courses" className="text-amber-400 font-semibold hover:text-amber-300 mt-4 md:mt-0">View all courses &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">School Tuitions</h3>
              <p className="text-slate-300 text-sm">Class 1 to 12, includes SSLC & HSC special coaching.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">College Coaching</h3>
              <p className="text-slate-300 text-sm">B.E. Maths, Arts & Science (UG/PG).</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">Competitive Exams</h3>
              <p className="text-slate-300 text-sm">TRB, TET, NET, NEET, JEE, Bank, Police.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-white">Additional Courses</h3>
              <p className="text-slate-300 text-sm">Computer, Spoken English, Hindi, Personality Development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-blue-100 mb-10">Join Bright Tutorials today and take the first step towards academic success.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-xl hover:bg-gray-100 transition">
              Enroll Now
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;