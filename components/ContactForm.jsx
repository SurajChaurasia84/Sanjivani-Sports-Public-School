'use client';

import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Email Address</label>
          <input type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm" required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Subject</label>
        <input type="text" placeholder="Admission Inquiry" className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm" required />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Message</label>
        <textarea rows="6" placeholder="How can we help you?" className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm resize-none" required></textarea>
      </div>
      <button 
        type="submit" 
        className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-200 md:w-max w-full"
      >
        Send Message <Send size={20} />
      </button>
    </form>
  );
};

export default ContactForm;
