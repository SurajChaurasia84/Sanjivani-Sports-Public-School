'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Hostel', href: '/hostel' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Notices', href: '/notices' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* 1. TOP INFO BAR */}
      <div className="bg-blue-950 text-blue-100 py-2 hidden lg:block border-b border-white/5">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-blue-400" />
              Established by: <span className="text-white">Viklang Sewa Evam Technical Shiksha Sansthan</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:09453544852" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={12} className="text-blue-400" /> 09453544852
            </a>
            <span className="text-blue-800">|</span>
            <a href="tel:09453543819" className="flex items-center gap-2 hover:text-white transition-colors">
              09453543819
            </a>
            <a href="mailto:sanjivanipublicschool2014@gmail.com" className="flex items-center gap-2 lowercase hover:text-white transition-colors ml-4">
              <Mail size={12} className="text-blue-400" /> sanjivanipublicschool2014@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header Row (Logo & Brand) */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'py-1' : 'py-3'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-slate-100">
              <img 
                src="/logo.png" 
                alt="SSPS Logo" 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-blue-950 block leading-tight tracking-tighter">SSPS</span>
              <span className="text-[10px] md:text-xs text-blue-700 font-bold uppercase tracking-[0.3em] block">Sanjivani Sports Public School</span>
            </div>
          </Link>

          {/* Full Campus Location for Desktop */}
          <div className="hidden lg:flex gap-3 items-center max-w-xs">
             <MapPin size={24} className="text-blue-200 flex-shrink-0" />
             <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mb-1">Campus Address</span>
                <span className="text-[11px] font-black text-blue-950 leading-tight">Assam Road, Semarahana, Nainiha, Mihinpurwa (Bahraich)</span>
             </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-700 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* 3. Navigation Strip (White Background with Divider) */}
      <nav className={`hidden lg:block transition-all duration-300 border-t border-slate-100 ${scrolled ? 'bg-white shadow-xl py-0' : 'bg-white py-1'}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-4 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 border-b-2 flex items-center ${
                  pathname === link.href
                    ? 'text-blue-700 border-blue-600 bg-blue-50/50'
                    : 'text-slate-500 border-transparent hover:text-blue-700 hover:bg-slate-50 hover:border-blue-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-blue-950 text-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="text-2xl font-black">SSPS</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-8 py-4 text-xl font-bold border-l-4 transition-all ${
                      pathname === link.href
                        ? 'border-blue-400 bg-blue-900 text-white'
                        : 'border-transparent text-blue-100 hover:bg-blue-900/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 border-t border-white/10 bg-blue-900/40">
                 <p className="text-[10px] text-blue-300 uppercase tracking-widest mb-4">Established by: Viklang Sewa Evam Technical Shiksha Sansthan</p>
                 <div className="space-y-3">
                    <a href="tel:09453544852" className="font-bold flex items-center gap-3"><Phone size={16} className="text-blue-400"/> 09453544852</a>
                    <a href="mailto:sanjivanipublicschool2014@gmail.com" className="text-sm flex items-center gap-3"><Mail size={16} className="text-blue-400"/> sanjivanipublicschool2014@gmail.com</a>
                    <p className="text-xs text-blue-200/70 flex items-center gap-3 leading-relaxed mt-4">
                      <MapPin size={16} className="text-blue-400 flex-shrink-0"/> Assam Road, Semarahana, Nainiha, Mihinpurwa (Bahraich)
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
