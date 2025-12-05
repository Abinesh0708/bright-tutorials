import React from 'react';
import { Target, Eye, MapPin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-slate-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bright Tutorials in Vadasery, Nagercoil is a trusted educational institution known for delivering high-quality coaching for school and polytechnic students.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Students Since Inception</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With years of experience and a commitment to academic excellence, we guide students with structured learning plans and personalized support. Our goal is to make learning simple, enjoyable, and effective through expert teaching and continuous evaluation.
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
                            <p className="text-gray-600 text-sm">Located near Oppo Popular Tailors, Vadasery, making it easy for students to reach us.</p>
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