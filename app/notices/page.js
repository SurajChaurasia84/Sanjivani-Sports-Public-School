import React from 'react';
import Section from '@/components/Section';
import { getData } from '@/lib/data';
import { Bell, Calendar, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Notices',
  description: 'Latest official notices and announcements from Sanjivani Sports Public School.',
};

export default async function NoticesPage() {
  const notices = await getData('notices');

  return (
    <div className="bg-slate-50 min-h-screen">
      <Section className="!pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <Bell size={20} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Official Notices</h1>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div 
                key={notice.id} 
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-200 group relative overflow-hidden flex items-start gap-5"
              >
                {notice.isUrgent && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                )}
                
                {/* Compact Date */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-slate-50 w-16 h-16 rounded-xl border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  <span className="text-xl font-black text-slate-800 group-hover:text-blue-700 leading-none">
                    {new Date(notice.date).getDate()}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-500 mt-1">
                    {new Date(notice.date).toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-tight">
                      {notice.title}
                    </h2>
                    {notice.isUrgent && (
                      <span className="bg-red-50 text-red-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest animate-pulse border border-red-100">
                         Important
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {notice.description}
                  </p>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-blue-400" /> 
                      {new Date(notice.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
                      <FileText size={12} className="text-blue-400" />
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Info */}
          <div className="text-center py-10">
            <p className="text-slate-400 text-sm font-medium">No more notices to show.</p>
            <Link href="/" className="text-blue-600 font-bold text-xs mt-3 inline-block uppercase tracking-widest hover:underline">
              ← Return Home
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
