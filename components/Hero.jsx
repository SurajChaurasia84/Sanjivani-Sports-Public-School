'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Trophy, Users, Home as HostelIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[650px] md:h-[850px] flex items-center overflow-hidden">
      {/* Background Image with Deeper Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="School Campus"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 leading-[1.1] tracking-tight">
              Nurturing Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 italic">Excellence in Sports.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50/80 mb-12 leading-relaxed max-w-2xl font-light">
              Sanjivani Sports Public School provides a high-performance environment where academic rigor meets athletic mastery.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/admissions"
                className="bg-blue-700 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1"
              >
                Admissions Open 2026-27 <ArrowRight size={22} />
              </Link>
              <Link
                href="/about"
                className="bg-white/5 hover:bg-white/15 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
              >
                Explore More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 hidden lg:block translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-1 bg-white p-2 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-100 backdrop-blur-3xl overflow-hidden">
            {[
              { label: 'Excellence In', value: 'Education', icon: BookOpen },
              { label: 'State-of-the-art', value: 'Campus', icon: HostelIcon },
              { label: 'Championship', value: 'Sports', icon: Trophy },
              { label: 'Holistic', value: 'Development', icon: Users },
            ].map((stat, i) => (
              <div key={i} className={`flex items-center gap-5 p-10 ${i !== 3 ? 'border-r border-slate-100' : ''}`}>
                <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl">
                  <stat.icon size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mb-1">{stat.label}</p>
                  <p className="text-2xl font-black text-blue-950 tracking-tight">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
