import React from 'react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { getData } from '@/lib/data';
import { Home, Coffee, ShieldCheck, HeartPulse, UserCheck, Star } from 'lucide-react';

export const metadata = {
  title: 'Hostel',
  description: 'Residential facilities and student life at SSPS Hostel.',
};

export default async function HostelPage() {
  const data = await getData('hostel');

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-widest mb-6">Residential Life</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
            Providing a secure, nurturing, and disciplined home away from home.
          </p>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>
        {/* Decoration */}
        <div className="absolute top-0 right-0 p-12 opacity-10"><Home size={300} /></div>
      </div>

      <Section title="Overview" subtitle="Everything you need to know about staying at SSPS.">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="relative p-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2.5rem]">
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200" 
                alt="Hostel Dormitory" 
                className="rounded-[2.4rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-blue-50 hidden lg:block">
                <p className="text-3xl font-bold text-blue-900 leading-tight">Comfortable <br/><span className="text-blue-500">Living</span></p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <p className="text-2xl text-slate-700 leading-relaxed font-medium italic">
              "{data.overview}"
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transform transition-transform hover:scale-[1.02]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Premier Comfort</h4>
                  <p className="text-slate-500 text-sm">Every detail is designed to feel like home, from bedding to ventilation.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transform transition-transform hover:scale-[1.02]">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Expert Care</h4>
                  <p className="text-slate-500 text-sm">Professional wardens and mentors available around the clock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-100" title="Hostel Amenities" subtitle="Comprehensive facilities to ensure a balanced lifestyle.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.facilities.map((facility, idx) => {
            const icons = {
              'Dormitories': Home,
              'Dining': Coffee,
              'Medical': HeartPulse,
              'Security': ShieldCheck,
              'Recreation': Star,
              'Academic Support': UserCheck
            };
            const Icon = icons[facility.name] || Home;

            return (
              <Card 
                key={idx}
                title={facility.name}
                description={facility.description}
                icon={Icon}
                className="bg-white border-0 hover:border-b-4 hover:border-blue-500"
              />
            );
          })}
        </div>
      </Section>

      {/* Routine Section */}
      <Section title="A Day at SSPS" subtitle="A structured schedule to balance academics, sports, and rest.">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              {[
                { time: '05:30 AM', activity: 'Wake up & Physical Conditioning' },
                { time: '08:00 AM', activity: 'Breakfast & School Assembly' },
                { time: '01:30 PM', activity: 'Nutritious Lunch & Rest' },
                { time: '04:00 PM', activity: 'Sporting Activities & Training' },
                { time: '07:00 PM', activity: 'Supervised Study Session' },
                { time: '09:30 PM', activity: 'Bedtime' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group">
                  <div className="min-w-[100px] text-blue-400 font-bold group-hover:text-white transition-colors">{item.time}</div>
                  <div className="h-0.5 flex-grow bg-blue-800 group-hover:bg-blue-600 transition-colors"></div>
                  <div className="min-w-[250px] font-medium text-slate-200 group-hover:text-white transition-colors">{item.activity}</div>
                </div>
              ))}
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 -z-0"></div>
          </div>
        </div>
      </Section>
    </div>
  );
}
