import React from 'react';
import Section from '@/components/Section';
import { getData } from '@/lib/data';
import { Target, Eye, MessageSquare, Quote } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about the vision, mission, and leadership of Sanjivani Sports Public School.',
};

export default async function AboutPage() {
  const data = await getData('about');

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-widest">About Our School</h1>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* About School */}
      <Section title="Our Story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              {data.about}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-700" size={32} />
                  <h3 className="text-xl font-bold text-blue-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 italic">"{data.vision}"</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-blue-700" size={32} />
                  <h3 className="text-xl font-bold text-blue-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 italic">"{data.mission}"</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541339906699-bc0560a887f3?q=80&w=1200" 
              alt="School Campus" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-blue-100 rounded-3xl -z-0"></div>
          </div>
        </div>
      </Section>

      {/* Leadership Messages */}
      <Section className="bg-slate-50" title="Leadership Messages">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { role: 'Founder', message: data.founderMessage, name: 'Shri Founder Name' },
            { role: 'Manager', message: data.managerMessage, name: 'Shri Manager Name' },
            { role: 'Principal', message: data.principalMessage, name: 'Dr. Principal Name' }
          ].map((leader, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mb-6 overflow-hidden border-4 border-blue-50 flex items-center justify-center">
                <img 
                  src={`https://ui-avatars.com/api/?name=${leader.name}&background=1e3a8a&color=fff&size=128`} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Quote className="text-blue-200 mb-4" size={40} />
              <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">
                {leader.message}
              </p>
              <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-2">{leader.role}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Counter (Static) */}
      <Section className="bg-blue-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Students', value: '500+' },
            { label: 'Experienced Staff', value: '40+' },
            { label: 'Sports Trophies', value: '100+' },
            { label: 'Founded In', value: '2015' }
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
