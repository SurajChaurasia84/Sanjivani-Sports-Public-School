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

      <Section className="!pt-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-50">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                    <a href="https://maps.app.goo.gl/2zV2fLAfQxTD2Drj7" target="_blank" rel="noopener noreferrer" className="text-slate-600 leading-relaxed font-medium hover:text-blue-600 transition-colors italic">Assam Road, Semarahana, Nainiha, Mihinpurwa (Bahraich)</a>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-50">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Numbers</h4>
                    <div className="flex flex-col text-slate-600 leading-relaxed font-medium">
                      <a href="tel:09453544852" className="hover:text-blue-600 transition-colors">094535 44852</a>
                      <a href="tel:09453543819" className="hover:text-blue-600 transition-colors">094535 43819</a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-50">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                    <a href="mailto:sanjivanipublicschool2014@gmail.com" className="text-slate-600 leading-relaxed font-medium hover:text-blue-600 transition-colors">sanjivanipublicschool2014@gmail.com</a>
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
                  <a key={idx} href="#" className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
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

      {/* Map Section Heading (Outside) */}
      <div className="container mx-auto px-4 pt-10 pb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-blue-950 uppercase tracking-tight leading-none mb-4">Visit Our School Campus</h2>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-sm text-slate-500 font-bold uppercase tracking-[0.3em]">Sanjivani Sports Public School</p>
      </div>

      {/* Map Section - Official Google Maps Embed */}
      <div className="w-full h-[600px] border-y border-slate-100 shadow-2xl group relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.258875239489!2d81.30156247992012!3d28.016562510944315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998938040000001%3A0xebb3ef11576daa43!2sSanjivani%20Sports%20Public%20School%20%26%20Hostel!5e0!3m2!1sen!2sin!4v1776781131073!5m2!1sen!2sin" 
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
