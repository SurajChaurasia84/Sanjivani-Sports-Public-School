'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Trophy, Users, Home as HostelIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/hero/h1.jpg',
  '/hero/h2.jpg',
  '/hero/h3.jpg',
  '/hero/h4.jpg',
  '/hero/h5.jpg',
  '/hero/h6.jpg',
  '/hero/h7.jpg',
  '/hero/h8.webp'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="bg-white !pt-0 pb-12 md:pb-16 overflow-hidden">
      <div className="w-full">
        {/* Main Hero Container - Full Width */}
        <div className="relative w-full h-[500px] md:h-[750px] bg-white overflow-hidden shadow-2xl group">
          
          {/* Background Image Slider */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={heroImages[currentIndex]}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                alt={`School Campus ${currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
