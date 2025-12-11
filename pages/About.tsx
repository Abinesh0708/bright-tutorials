import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-slate-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Bright Tutorials in Nagercoil is a premier educational institution delivering high-quality coaching for School, College, and Competitive Exams.
                    </p>

                    {/* Principal Section */}
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
                        <div className="md:flex">

                            <div className="p-5 text-left flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Principal of the Institution</div>
                                <h2 className="block mt-1 text-3xl leading-tight font-bold text-gray-900">Mr. R. A. Lingesh</h2>
                                <p className="mt-2 text-lg text-gray-500 font-medium">M.A., B.Ed.</p>
                                <p className="mt-4 text-xl text-gray-600 italic">
                                    "Dedicated to nurturing young minds and guiding them towards academic excellence with discipline and structured learning."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Students for All Challenges</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Located at 12B,Mead street, college road, very near old corporation office, Nagercoil-629001, we guide students from primary school to professional competitive exams. Our goal is to simply education and ensure success through structured learning and daily practice. You can reach us at 04652 279887.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                                <div className="flex items-center gap-3 mb-3">
                                    <Eye className="text-blue-600 w-6 h-6" />
                                    <h3 className="font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-sm text-gray-700">
                                    To create an empowering learning environment where students gain confidence, improve academic performance, and achieve success in competitive and board examinations.
                                </p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <Target className="text-amber-600 w-6 h-6" />
                                    <h3 className="font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-sm text-gray-700">
                                    Deliver conceptual clarity, provide accessible coaching, support learners with resources, and help students achieve their maximum academic potential.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/images/about.jpg" alt="Students in classroom" className="rounded-2xl shadow-2xl" />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="text-blue-600 font-bold text-lg mb-1">Located in Vadasery</p>
                            <p className="text-gray-500 text-sm">Easily accessible for all Nagercoil students.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Location & Infrastructure</h2>
                        <p className="text-gray-600 mt-4">Designed for focus and learning.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Prime Location</h3>
                            <p className="text-gray-600 text-sm">Located in Vadasery, making it easy for students to reach us.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Target className="text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Modern Classrooms</h3>
                            <p className="text-gray-600 text-sm">Well-maintained, distraction-free environment with comfortable seating and lighting.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Eye className="text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Teaching Tools</h3>
                            <p className="text-gray-600 text-sm">High-quality teaching tools and a supportive atmosphere for focused learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;