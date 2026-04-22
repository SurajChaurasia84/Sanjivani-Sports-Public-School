'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const AdmissionBadge = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed right-6 bottom-24 z-[100] hidden md:block"
    >
      <Link href="/admissions">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 10px 25px -5px rgba(29, 78, 216, 0.4)",
              "0 20px 50px -10px rgba(29, 78, 216, 0.6)",
              "0 10px 25px -5px rgba(29, 78, 216, 0.4)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="bg-blue-600 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 border-4 border-white shadow-2xl cursor-pointer group hover:bg-blue-700 transition-colors"
        >
          <div className="bg-white/20 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <GraduationCap size={24} />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">2026-27</p>
            <p className="text-sm font-black uppercase tracking-tight leading-none">Admission Open</p>
          </div>
          
          {/* Pulsing Ring Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeOut" 
            }}
            className="absolute inset-0 bg-blue-600 rounded-2xl -z-10"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AdmissionBadge;
