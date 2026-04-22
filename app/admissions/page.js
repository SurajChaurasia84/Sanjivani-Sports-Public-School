import React from 'react';
import Section from '@/components/Section';
import Accordion from '@/components/Accordion';
import { getData } from '@/lib/data';
import { ClipboardCheck, FileText, Scale, UserMinus, PhoneCall, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Admissions',
  description: 'Admission process, criteria, and documentation requirements at SSPS.',
};

export default async function AdmissionsPage() {
  const data = await getData('admissions');

  const ruleItems = [
    { title: 'General Conduct & Attendance', content: data.rules[0] },
    { title: 'Uniform & Grooming', content: data.rules[1] },
    { title: 'Campus Discipline', content: data.rules[2] },
    { title: 'Withdrawal Policy', content: data.withdrawalPolicy }
  ];

  return (
    <div className="bg-white">

      {/* Admission Overview */}
      <Section title="The Admission Process" className="!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <ClipboardCheck className="text-blue-600" /> General Overview
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {data.overview}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="text-blue-600" /> Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {data.criteria.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-bold font-display mb-10 flex items-center gap-4">
              <FileText className="text-blue-400" /> Required Documents
            </h3>
            <ul className="space-y-6 relative z-10">
              {data.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex gap-4 items-center group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 bg-blue-800/30 rounded-2xl border border-blue-500/20">
              <p className="text-blue-100 text-sm italic">
                Note: Original documents must be presented at the time of admission for verification.
              </p>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </Section>

      {/* Rules & Policies */}
      <Section className="bg-slate-50" title="Rules & Policies">
        <Accordion items={ruleItems} />
      </Section>

      {/* Final CTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Start Your Journey Today</h2>
              <p className="text-xl text-blue-100 mb-12 opacity-90 max-w-2xl mx-auto">
                Download the admission form or visit our campus for a personalized interaction. 
                Our admissions office is open Monday to Saturday, 9:00 AM to 3:00 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="/Application_form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl"
                >
                  Admission Form <ArrowRight size={20} />
                </a>
                <Link href="/contact" className="bg-blue-900/30 text-white border border-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900/50 transition-all flex items-center gap-2">
                  <PhoneCall size={20} /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
