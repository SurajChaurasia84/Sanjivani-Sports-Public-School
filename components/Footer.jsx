import React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold text-white uppercase tracking-wider">SSPS</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Sanjivani Sports Public School is dedicated to excellence in education and sports. We nurture the leaders of tomorrow with a balanced focus on academics and physical growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-emerald-600">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Our School</Link></li>
              <li><Link href="/academics" className="hover:text-emerald-500 transition-colors">Academic Programs</Link></li>
              <li><Link href="/hostel" className="hover:text-emerald-500 transition-colors">Residential Facilities</Link></li>
              <li><Link href="/admissions" className="hover:text-emerald-500 transition-colors">Admission Process</Link></li>
              <li><Link href="/gallery" className="hover:text-emerald-500 transition-colors">Photo Gallery</Link></li>
              <li><Link href="/notices" className="hover:text-emerald-500 transition-colors">Latest Notices</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-emerald-600">Student Life</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/facilities" className="hover:text-emerald-500 transition-colors">Campus Facilities</Link></li>
              <li><Link href="/sports" className="hover:text-emerald-500 transition-colors">Sports Infrastructure</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact Support</Link></li>
              <li><Link href="/#faq" className="hover:text-emerald-500 transition-colors">FAQs</Link></li>
              <li><Link href="/#transport" className="hover:text-emerald-500 transition-colors">Transport Route</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-emerald-600">Get In Touch</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-emerald-500 flex-shrink-0" size={20} />
                <span>Semrahana, Mihinpurwa, Bahraich (U.P.), India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-emerald-500 flex-shrink-0" size={20} />
                <span>+91-XXXXXXXXXX, +91-XXXXXXXXXX</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-emerald-500 flex-shrink-0" size={20} />
                <span>info@ssps-school.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs space-y-4">
          <p>© {currentYear} Sanjivani Sports Public School. All rights reserved. Built with Next.js</p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/credits" className="hover:text-white transition-colors">Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
