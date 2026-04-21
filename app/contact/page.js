import React from 'react';
import Section from '@/components/Section';
import { MapPin, Phone, Mail, Clock, Globe, Share2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Reach out to Sanjivani Sports Public School for inquiries and admissions.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-emerald-900 py-24 text-white text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-widest mb-6">Contact Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto opacity-80 px-4">
            We are here to answer your questions and welcome you to our campus.
          </p>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-50">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed">Semrahana, Mihinpurwa,<br />Bahraich (U.P.), India</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-50">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Numbers</h4>
                    <p className="text-slate-600 leading-relaxed">+91-XXXXXXXXXX<br />+91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-50">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600 leading-relaxed">info@ssps-school.edu.in<br />admissions@ssps-school.edu.in</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-50">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Office Hours</h4>
                    <p className="text-slate-600 leading-relaxed">Mon - Sat: 9:00 AM - 3:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[Globe, Share2].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-grow bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 font-display">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>


      {/* Map Section (Placeholder) */}
      <div className="w-full h-[500px] bg-slate-200 relative overflow-hidden group">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=28.1884,81.2828&zoom=13&size=1600x500&sensor=false')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
        <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
           <div className="bg-white p-6 rounded-full shadow-2xl relative">
              <MapPin size={48} className="text-emerald-600 animate-bounce" />
              <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-2xl w-[300px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-bold text-slate-900">Sanjivani Sports Public School</p>
                <p className="text-xs text-slate-500 mt-1">Visit our campus today!</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
