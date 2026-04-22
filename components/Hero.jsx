'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Home as HostelIcon, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Hero Container - 85% Width, Professional Academic Look */}
        <div className="relative w-full lg:w-[85vw] mx-auto h-[500px] md:h-[700px] bg-slate-900 overflow-hidden shadow-2xl group">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/hero.png" 
              alt="School Campus" 
              className="w-full h-full object-cover opacity-65"
            />
            {/* Professional Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-transparent"></div>
          </div>

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 max-w-2xl relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block py-1 px-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 rounded-sm">
                  Excellence in Sports & Academics
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 font-display leading-[0.95] uppercase tracking-tighter">
                  Nurturing <span className="text-blue-400">Future</span> <br />Champions
                </h1>
                <p className="text-blue-100/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
                  Welcome to Sanjivani Sports Public School. Where high-performance athletic training meets world-class academic rigor.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/admissions" 
                    className="bg-white text-blue-950 px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-blue-50 transition-all flex items-center gap-3 shadow-2xl"
                  >
                    Apply Now <ArrowRight size={18} />
                  </Link>
                  <Link 
                    href="/about" 
                    className="border border-white/30 text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
                  >
                    Our Vision
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar Integrated at the very bottom of the Hero Box (Desktop Only) */}
          <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md hidden md:block">
            <div className="grid grid-cols-4 divide-x divide-slate-100 border-t border-slate-100">
              {[
                { label: 'Excellence In', value: 'Education', icon: BookOpen },
                { label: 'State-of-the-art', value: 'Campus', icon: HostelIcon },
                { label: 'Championship', value: 'Sports', icon: Trophy },
                { label: 'Holistic', value: 'Development', icon: Users },
              ].map((stat, i) => (
                <div key={i} className="px-8 py-6 flex items-center gap-4 group/stat hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-600 text-white p-2 rounded-lg group-hover/stat:scale-110 transition-transform">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black mb-0.5">{stat.label}</p>
                    <p className="text-xs font-black text-blue-950 uppercase">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stats (Stacked below image for mobile users) */}
        <div className="grid grid-cols-2 lg:hidden gap-2 mt-4">
          {[
            { label: 'Excellence In', value: 'Education', icon: BookOpen },
            { label: 'State-of-the-art', value: 'Campus', icon: HostelIcon },
            { label: 'Championship', value: 'Sports', icon: Trophy },
            { label: 'Holistic', value: 'Development', icon: Users },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
              <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                <stat.icon size={18} />
              </div>
              <div>
                <p className="text-[8px] text-slate-400 uppercase font-black">{stat.label}</p>
                <p className="text-[10px] font-black text-blue-950 uppercase">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
