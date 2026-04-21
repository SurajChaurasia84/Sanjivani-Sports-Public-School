import React from 'react';
import Section from '@/components/Section';
import Tabs from '@/components/Tabs';
import { getData } from '@/lib/data';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Academics',
  description: 'Academic curriculum, scheme of studies, and evaluation system at SSPS.',
};

export default async function AcademicsPage() {
  const data = await getData('academics');

  const tabs = data.schemeOfStudies.map((scheme) => ({
    label: scheme.level,
    content: (
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-600" /> Subjects Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scheme.subjects.map((subject, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                <span className="text-slate-700 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3 bg-blue-50 p-8 rounded-2xl">
          <Award className="text-blue-600 mb-4" size={40} />
          <h4 className="text-lg font-bold text-blue-900 mb-2">Academic Highlights</h4>
          <p className="text-blue-700 text-sm leading-relaxed">
            Students at the {scheme.level} level focus on building a strong foundation in core subjects while exploring their creative potential through Art and Physical Education.
          </p>
        </div>
      </div>
    )
  }));

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-widest text-shadow">Academics</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <Section title="Overview" subtitle="Empowering students with a forward-thinking curriculum.">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-blue-50 relative overflow-hidden group hover:border-blue-200 transition-all">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Curriculum Philosophy</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {data.curriculumOverview}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex-shrink-0 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Conceptual Learning</h4>
                    <p className="text-slate-500 text-sm">Focus on understanding 'why' and 'how' rather than just 'what'.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white flex-shrink-0 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Critical Thinking</h4>
                    <p className="text-slate-500 text-sm">Encouraging students to question, analyze, and solve problems creatively.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-8 transform translate-x-1/3 -translate-y-1/3 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-125">
              <BookOpen size={400} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50" title="Scheme of Studies" subtitle="Grade-wise distribution of core and elective subjects.">
        <Tabs tabs={tabs} />
      </Section>

      <Section title="Evaluation System" subtitle="Continuous and Comprehensive Evaluation for overall mapping.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Term I (April - Sept)</h3>
            <p className="text-slate-600 mb-6">{data.evaluationSystem.term1}</p>
            <div className="mt-auto w-full pt-6 border-t border-slate-50 text-blue-600 font-bold uppercase tracking-widest text-xs">Summer Session</div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Term II (Oct - March)</h3>
            <p className="text-slate-600 mb-6">{data.evaluationSystem.term2}</p>
            <div className="mt-auto w-full pt-6 border-t border-slate-50 text-blue-600 font-bold uppercase tracking-widest text-xs">Winter Session</div>
          </div>
        </div>
        <div className="mt-12 text-center bg-blue-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-8 shadow-2xl shadow-blue-200">
          <p className="text-xl font-medium tracking-wide">
            Our system is built on <span className="text-blue-400 font-bold underline decoration-2 underline-offset-4">Continuous and Comprehensive Evaluation</span>.
          </p>
          <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest">
            {data.evaluationSystem.weightage}
          </div>
        </div>
      </Section>
    </div>
  );
}
