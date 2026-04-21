import React from 'react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { getData } from '@/lib/data';
import { Monitor, Trophy, FlaskConical, BookOpen, Stethoscope, Bus, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Facilities',
  description: 'Infrastructure and facilities available at Sanjivani Sports Public School.',
};

export default async function FacilitiesPage() {
  const data = await getData('facilities');

  const icons = {
    'Monitor': Monitor,
    'Trophy': Trophy,
    'FlaskConical': FlaskConical,
    'BookOpen': BookOpen,
    'Stethoscope': Stethoscope,
    'Bus': Bus,
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-emerald-900 py-24 text-white text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-widest mb-6">Our Infrastructure</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto opacity-80 leading-relaxed px-4">
            World-class facilities designed to foster academic growth and athletic excellence.
          </p>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>

      <Section title="Premium Facilities" subtitle="We invest in the best to ensure our students have everything they need to succeed.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.facilities.map((facility) => {
            const Icon = icons[facility.icon] || Sparkles;
            return (
              <div key={facility.id} className="group relative">
                <Card 
                  title={facility.name}
                  description={facility.description}
                  icon={Icon}
                  className="h-full border-2 border-slate-100 hover:border-emerald-200 transition-all duration-500"
                />
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <Sparkles size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Feature Showcase */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">Technology-Driven <br/><span className="text-emerald-400">Learning Spaces</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our smart classrooms are equipped with the latest interactive technology, bringing complex concepts to life with vivid visuals and hands-on digital interactions.
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  'Interactive 4K Digital Boards',
                  'High-Speed Campus-Wide Wi-Fi',
                  'Fully Equipped IT Laboratory',
                  'Multimedia Resource Center'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-emerald-100 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] border border-emerald-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200" 
                  alt="Smart Classroom" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-20 -z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Detail Section */}
      <Section title="Athletic Arena" subtitle="True to our name, sports is at the core of everything we do.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200" 
              alt="Cricket Training" 
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Cricket Academy</h3>
              <p className="text-emerald-100 opacity-90">State-level pitches and professional nets for year-round practice.</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1200" 
              alt="Football Field" 
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Football Grounds</h3>
              <p className="text-blue-100 opacity-90">Vast floodlit fields for matches and specialized skill training.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
