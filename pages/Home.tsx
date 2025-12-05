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
            <p className="text-lg text-gray-600">We are committed to providing the best learning environment for your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Faculty", desc: "Experienced and qualified teachers dedicated to your growth.", icon: <Users className="w-8 h-8 text-blue-600" /> },
              { title: "Personalized Attention", desc: "Small batch sizes ensuring every student gets focus.", icon: <CheckCircle2 className="w-8 h-8 text-blue-600" /> },
              { title: "Modern Facilities", desc: "Well-maintained classrooms and distraction-free environment.", icon: <BookOpen className="w-8 h-8 text-blue-600" /> },
              { title: "Regular Assessments", desc: "Weekly tests and tracking to monitor progress.", icon: <Trophy className="w-8 h-8 text-blue-600" /> },
              { title: "Proven Results", desc: "A track record of academic success and top grades.", icon: <CheckCircle2 className="w-8 h-8 text-blue-600" /> },
              { title: "Supportive Environment", desc: "A culture that encourages questions and curiosity.", icon: <Users className="w-8 h-8 text-blue-600" /> },
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
              <p className="text-slate-400 max-w-2xl">Comprehensive coaching for school and technical education.</p>
            </div>
            <Link to="/courses" className="text-amber-400 font-semibold hover:text-amber-300 mt-4 md:mt-0">View all courses &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">School Coaching</h3>
              <p className="text-slate-300 mb-6">Structured classes for VIII, X, XI, and XII covering all major subjects including Science, Maths, and Commerce.</p>
              <ul className="space-y-2 mb-8 text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>Biology, Chemistry, Physics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>Maths, Accounts, Commerce</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>Social Studies & Science</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-amber-500 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors">Polytechnic Coaching</h3>
              <p className="text-slate-300 mb-6">Specialized support for Polytechnic students with simplified notes and technical guidance.</p>
              <ul className="space-y-2 mb-8 text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Engineering Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Engineering Basics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Past Year Question Practice</li>
              </ul>
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