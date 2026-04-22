import React from 'react';
import Section from '@/components/Section';
import { getData } from '@/lib/data';
import { Target, Eye, Quote, Award, Sparkles, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about the vision, mission, and leadership of Sanjivani Sports Public School.',
};

export default async function AboutPage() {
  const data = await getData('about');

  // Splitting the content into paragraphs based on the user's provided structure
  const paragraphs = data.about.split('\n\n');

  return (
    <div className="bg-white">

      {/* Main About Content */}
      <Section className="pb-0 !pt-8">
        <div className="max-w-5xl mx-auto">
          {/* Part 1: Foundation & Motto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Established 2017
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-8 leading-tight">
                Founded on the Pillars of <br /><span className="text-blue-600">Discipline & Value</span>
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-0">
                {paragraphs[0]}
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-blue-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative z-10">
                <Quote className="text-blue-400 mb-6 opacity-50" size={48} />
                <p className="text-2xl font-bold italic leading-relaxed">
                  "Discipline, quality and value education."
                </p>
                <div className="mt-8 pt-8 border-t border-white/10 text-blue-300 text-sm uppercase tracking-widest font-bold">
                  Our Core Motto
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-100 rounded-[2.5rem] -z-0"></div>
            </div>
          </div>

          {/* Part 2: Activity Based Excellence */}
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden mb-24 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <Award size={32} />
                  <span className="font-black uppercase tracking-widest text-sm">Top Academic Achievement</span>
                </div>
                <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                  {paragraphs[1]}
                </p>
              </div>
              <div className="flex items-center justify-center p-8 lg:p-12">
                <div className="relative p-1 bg-white rounded-[1.5rem] shadow-xl border-1 border-blue-100 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/Yoga.jpg"
                    alt="Academic Excellence"
                    className="w-full h-auto max-w-[400px] rounded-3xl object-cover shadow-inner"
                  />
                  {/* Accent Decoration */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12">
                    <Sparkles size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Philosophy */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100">
              <Heart className="text-blue-600" size={32} />
            </div>
            <h3 className="text-3xl font-black text-blue-950 mb-8 uppercase tracking-tight">Our Child-Centered Philosophy</h3>
            <p className="text-2xl text-slate-600 leading-relaxed italic font-medium">
              "{paragraphs[2]}"
            </p>
          </div>

          {/* Part 4: Vision & Mission */}
          <div className="max-w-4xl mx-auto border-t border-slate-100 pt-24 space-y-24">
            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100">
                <Eye size={14} /> Our Vision
              </div>
              <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed max-w-3xl italic">
                "{data.vision}"
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent mt-10 rounded-full"></div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border-2 border-blue-50 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">Our Mission</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.mission.split('\n\n').map((point, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed group-hover:text-blue-900 transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Part 5: Management Committee */}
          <div className="max-w-4xl mx-auto pt-24">
            <div className="bg-blue-900 text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center">
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-widest mb-6">School Management Committee</h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto italic">
                  "{data.managementCommittee}"
                </p>
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-10 rounded-full"></div>
              </div>
              {/* Subtle Decoration */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership Messages */}
      <Section className="bg-slate-50" title="Leadership Messages">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { role: 'Founder', message: data.founderMessage, name: 'Mr. Ramcharan Chaurasiya' },
            { role: 'Manager', message: data.managerMessage, name: 'Dr. D. Kumar' },
            { role: 'Principal', message: data.principalMessage, name: 'Mr. R B Bharti' }
          ].map((leader, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-all">
              <div className="w-24 h-24 bg-blue-100 rounded-full mb-6 overflow-hidden border-4 border-blue-50 flex items-center justify-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${leader.name}&background=1e3a8a&color=fff&size=128`}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <Quote className="text-blue-100 mb-4" size={40} />
              <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">
                {leader.message}
              </p>
              <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-2">{leader.role}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Counter */}
      <Section className="bg-blue-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Students', value: '500+' },
            { label: 'Experienced Staff', value: '40+' },
            { label: 'Sports Trophies', value: '100+' },
            { label: 'Founded In', value: '2017' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-bold font-display text-blue-400 mb-2">{stat.value}</p>
              <p className="text-slate-300 uppercase tracking-widest text-sm font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
