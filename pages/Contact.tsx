import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE_DATA } from '../constants';

const Contact: React.FC = () => {
   return (
      <div className="bg-white">
         <div className="bg-slate-900 text-white py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-300">We'd love to hear from you. Get in touch with us.</p>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div className="space-y-8">
                  <div>
                     <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                     <p className="text-gray-600 mb-8">
                        Visit us during working hours or call us for admission inquiries. We are here to answer your questions about courses, fees, and schedules.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900">Our Location</h3>
                           <p className="text-gray-600 mt-1">{SITE_DATA.location}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                           <Phone className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900">Phone</h3>
                           <p className="text-gray-600">{SITE_DATA.phone}</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                           <Clock className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900">Business Hours</h3>
                           <p className="text-gray-600">{SITE_DATA.hours}</p>
                           <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-8">
                     <a
                        href={`tel:${SITE_DATA.phone.replace(/\s/g, '')}`}
                        className="block w-full sm:w-auto text-center sm:inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition shadow-md"
                     >
                        Call Now for Admission
                     </a>
                  </div>
               </div>

               {/* Map Placeholder */}
               <div className="bg-gray-200 rounded-2xl min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-inner">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.508937177192!2d77.42978024438524!3d8.186747596768722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1267c436e99%3A0x3b1a479e27f413eb!2sBright%20Tutorials!5e1!3m2!1sen!2sin!4v1765471495577!5m2!1sen!2sin"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={true}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     className="absolute inset-0 w-full h-full rounded-2xl"
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;