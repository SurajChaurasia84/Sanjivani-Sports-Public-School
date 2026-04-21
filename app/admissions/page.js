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
      {/* Page Header */}
      <div className="bg-emerald-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-widest mb-6">Join Our Community</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto opacity-90 leading-relaxed font-medium">
            Admissions for the Academic Session 2026-27 are now open.
          </p>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Admission Overview */}
      <Section title="The Admission Process" subtitle="Simple and transparent steps to secure your child's future.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
                <ClipboardCheck className="text-emerald-600" /> General Overview
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {data.overview}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <FileText className="text-emerald-600" /> Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {data.criteria.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-md">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-bold font-display mb-10 flex items-center gap-4">
              <FileText className="text-emerald-400" /> Required Documents
            </h3>
            <ul className="space-y-6 relative z-10">
              {data.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex gap-4 items-center group">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 bg-emerald-800/30 rounded-2xl border border-emerald-500/20">
              <p className="text-emerald-100 text-sm italic">
                Note: Original documents must be presented at the time of admission for verification.
              </p>
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </Section>

      {/* Rules & Policies */}
      <Section className="bg-slate-50" title="Rules & Policies" subtitle="Committed to maintaining a disciplined and safe environment.">
        <Accordion items={ruleItems} />
      </Section>

      {/* Final CTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative shadow-2xl shadow-emerald-200">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Start Your Journey Today</h2>
              <p className="text-xl text-emerald-100 mb-12 opacity-90 max-w-2xl mx-auto">
                Download the admission form or visit our campus for a personalized interaction. 
                Our admissions office is open Monday to Saturday, 9:00 AM to 3:00 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-emerald-50 transition-all shadow-xl">
                  Download Form <ArrowRight size={20} />
                </button>
                <Link href="/contact" className="bg-emerald-900/30 text-white border border-emerald-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-900/50 transition-all flex items-center gap-2">
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
