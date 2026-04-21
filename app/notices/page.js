import React from 'react';
import Section from '@/components/Section';
import { getData } from '@/lib/data';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Notices',
  description: 'Latest official notices and announcements from Sanjivani Sports Public School.',
};

export default async function NoticesPage() {
  const notices = await getData('notices');

  return (
    <div className="bg-slate-50">
      {/* Page Header */}
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display uppercase tracking-widest mb-6 leading-tight">Notice Board</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
            Stay informed about the latest events, announcements, and important updates.
          </p>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>
        {/* Decoration */}
        <div className="absolute top-0 right-0 p-12 opacity-10"><Bell size={300} /></div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 group relative overflow-hidden`}
            >
              {notice.isUrgent && (
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 flex flex-col items-center bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                  <span className="text-3xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {new Date(notice.date).getDate()}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors">
                    {new Date(notice.date).toLocaleString('default', { month: 'short' })} {new Date(notice.date).getFullYear()}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{notice.title}</h2>
                    {notice.isUrgent && (
                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 animate-pulse">
                         Important
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {notice.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-slate-400 text-sm italic">
                      <Calendar size={14} /> Posted on {new Date(notice.date).toLocaleDateString()}
                    </div>
                    <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                      View Details <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State / Pagination Info */}
          <div className="text-center pt-12 border-t border-slate-200">
            <p className="text-slate-500">No more notices to show at this moment.</p>
            <Link href="/" className="text-blue-600 font-bold mt-4 inline-block hover:underline">Return to Homepage</Link>
          </div>
        </div>
      </Section>

      {/* Archive Section Callout */}
      <Section className="bg-blue-900 text-white p-2">
         <div className="container mx-auto px-4 text-center py-12">
            <h3 className="text-3xl font-bold font-display mb-4">Looking for past announcements?</h3>
            <p className="text-blue-100 opacity-80 mb-8 max-w-xl mx-auto">
              Our digital archive contains notices dating back to 2015. Contact the school office for access to older records.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all border border-blue-400">
               Access Archive
            </button>
         </div>
      </Section>
    </div>
  );
}
