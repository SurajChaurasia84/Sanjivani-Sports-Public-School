import React from 'react';
import Section from '@/components/Section';
import GalleryGrid from '@/components/GalleryGrid';
import { getData } from '@/lib/data';
import { Camera } from 'lucide-react';

export const metadata = {
  title: 'Gallery',
  description: 'A visual journey through the campus, events, and activities at SSPS.',
};

export default async function GalleryPage() {
  const images = await getData('gallery');

  return (
    <div className="bg-white">

      <Section title="Gallery" className="!pt-8">
        <GalleryGrid images={images} />
      </Section>

      {/* Video Section Placeholder */}
      <Section className="bg-slate-50" title="Video Highlights">
        <div className="max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group bg-slate-900">
           <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
             </div>
           </div>
           <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-bold font-display">Annual Sports Day 2025</h3>
              <p className="text-blue-400 opacity-90">Coming Soon to our YouTube Channel</p>
           </div>
        </div>
      </Section>
    </div>
  );
}
