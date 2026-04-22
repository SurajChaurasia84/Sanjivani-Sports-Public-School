import React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Globe } from 'lucide-react';

const YoutubeIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="SSPS Logo" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <span className="text-lg font-bold text-white uppercase tracking-wider leading-tight">Sanjivani Sports <br />Public School</span>
            </Link>

            <div className="text-sm border-l-2 border-blue-600 pl-4 py-1 italic text-slate-400">
              Established by: <strong>Viklang Sewa Evam Technical Shiksha Sansthan</strong>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Sanjivani Sports Public School is dedicated to excellence in education and sports, nurturing the leaders of tomorrow with a balanced focus on academics and physical growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@sanjivanisportspublicschoo1163" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                <YoutubeIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'About Our School', href: '/about' },
                { name: 'Academic Programs', href: '/academics' },
                { name: 'Residential Facilities', href: '/hostel' },
                { name: 'Admission Process', href: '/admissions' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Latest Notices', href: '/notices' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-500 transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600">Student Life</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Campus Facilities', href: '/facilities' },
                { name: 'Sports Infrastructure', href: '/sports' },
                { name: 'Contact Support', href: '/contact' },
                { name: 'FAQs', href: '/#faq' },
                { name: 'Transport Route', href: '/#transport' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-500 transition-all flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/Application_form.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white font-black transition-all flex items-center gap-2 group uppercase text-[10px] tracking-widest mt-4">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Admission Form (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-600">Get In Touch</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-blue-500 flex-shrink-0" size={20} />
                <a href="https://maps.app.goo.gl/2zV2fLAfQxTD2Drj7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Assam Road, Semarahana, Nainiha, Mihinpurwa (Bahraich)</a>
              </li>
              <li className="flex gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={20} />
                <div className="flex flex-col gap-1">
                  <a href="tel:09453544852" className="hover:text-blue-500 transition-colors">09453544852</a>
                  <a href="tel:09453543819" className="hover:text-blue-500 transition-colors">09453543819</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={20} />
                <a href="mailto:sanjivanipublicschool2014@gmail.com" className="break-all font-medium hover:text-blue-500 transition-colors">sanjivanipublicschool2014@gmail.com</a>
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
