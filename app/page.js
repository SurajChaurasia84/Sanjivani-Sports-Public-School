import Link from 'next/link';
import { getData } from '@/lib/data';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import { ArrowRight, BookOpen, Users, Trophy, Home as HostelIcon, Bell, GraduationCap, ArrowUpRight, FileText } from 'lucide-react';

export default async function HomePage() {
  const aboutData = await getData('about');
  const facilitiesData = await getData('facilities');
  const noticesData = await getData('notices');
  const galleryData = await getData('gallery');

  const latestNotices = noticesData.slice(0, 3);
  const featuredFacilities = facilitiesData.facilities.slice(0, 3);
  const previewImages = galleryData.slice(0, 4);

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <Hero />


      {/* Highlights Section */}
      <Section className="!pt-0" title="Why Sanjivani?" subtitle="We combine world-class sports facilities with a rigorous academic curriculum to build the leaders of tomorrow.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Academic Rigor", desc: "Our CBSE-aligned curriculum is delivered through innovative project-based learning.", icon: BookOpen },
            { title: "Elite Sports", desc: "Comprehensive training in Cricket, Tennis, and Swimming by national-level coaches.", icon: Trophy },
            { title: "Residential Life", desc: "A home away from home with premium amenities and 24/7 student support.", icon: HostelIcon },
            { title: "Global Values", desc: "Fostering integrity, discipline, and leadership through value-based education.", icon: Users },
          ].map((item, idx) => (
            <Card 
              key={idx}
              title={item.title} 
              description={item.desc}
              icon={item.icon}
              className="bg-white border-slate-100 shadow-xl shadow-slate-100/50 hover:border-blue-200"
            />
          ))}
        </div>
      </Section>

      {/* Facilities Preview */}
      <Section className="bg-slate-50/50" title="Campus Excellence" subtitle="Premium infrastructure designed to maximize indoor and outdoor learning possibilities.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[
            { id: 1 },
            { id: 2 },
            { id: 3 }
          ].map((facility, index) => {
            const facilityImages = ['/assets/p1.webp', '/assets/p2.png', '/assets/p3.webp'];
            return (
              <Card 
                key={facility.id}
                imageUrl={facilityImages[index] || facilityImages[0]}
              />
            );
          })}
        </div>
        <div className="text-center">
          <Link href="/facilities" className="inline-flex items-center gap-3 text-blue-700 font-black uppercase tracking-widest text-sm hover:gap-5 transition-all group">
            Discover All Facilities <ArrowRight size={20} className="group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* School Video Section */}
      <Section title="Experience SSPS" subtitle="A visual journey through our campus and student life.">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-8 border-white relative group">
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/fcAJCJN6KeY" 
              title="Sanjivani Sports Public School Assam Road, Semarahana, Nainiha, Mihinpurwa (Bahraich)" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          {/* Decorative geometric shapes around video */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-700/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-100 rounded-2xl rotate-12 -z-10"></div>
        </div>
      </Section>

      {/* Notices & Admissions Board */}
      <Section title="Inside SSPS" subtitle="Latest announcements, academic calendars, and admission updates.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {latestNotices.map((notice) => (
              <div key={notice.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex gap-8 items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/20 rounded-full translate-x-1/2 -translate-y-1/2 -z-0"></div>
                <div className="bg-blue-900 text-white font-bold p-6 rounded-2xl flex flex-col items-center justify-center min-w-[110px] shadow-lg shadow-blue-200">
                  <span className="text-3xl">{new Date(notice.date).getDate()}</span>
                  <span className="text-xs uppercase tracking-[0.2em]">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="flex-grow relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-700 transition-colors uppercase tracking-tight">{notice.title}</h3>
                    {notice.isUrgent && <span className="bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-red-200 animate-pulse">Critical</span>}
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed line-clamp-2">{notice.description}</p>
                  <Link href={`/notices`} className="text-blue-700 text-sm font-black mt-6 inline-block hover:underline uppercase tracking-widest">Notice Details</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-950 rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-blue-900/30">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-800/50 rounded-full flex items-center justify-center mb-10 border border-blue-700/50">
                <Bell className="text-blue-400" size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-6 font-display leading-tight">Admissions Open 2026-27</h3>
              <p className="text-blue-100/70 text-lg mb-12 leading-relaxed font-light">
                Join our elite community. Limited seats available from Nursery to Grade IX. Experience a global standard of educational excellence.
              </p>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <Link 
                href="/admissions" 
                className="bg-white text-blue-950 py-5 rounded-2xl font-black text-center hover:bg-blue-50 transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl"
              >
                Start Application <ArrowUpRight size={22} />
              </Link>
              <a 
                href="/Application_form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/30 text-white border border-blue-400/50 py-4 rounded-2xl font-bold text-center hover:bg-blue-600/50 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                Admission Form <FileText size={18} />
              </a>
            </div>
            {/* Geometric Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800/20 rounded-xl -rotate-12 translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </Section>

      {/* Gallery Showcase */}
      <Section className="bg-blue-950 text-white" title="The Sanjivani Experience" subtitle="Capturing the spirit of competition and academic breakthrough at our campus.">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {previewImages.map((img) => (
            <div key={img.id} className="group shadow-2xl relative bg-white rounded-[2rem] overflow-hidden border border-white/10">
              <div className="relative aspect-[4/5] bg-blue-900/10 flex items-center justify-center p-2">
                <img 
                  src={img.image} 
                  alt={img.caption}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery" className="bg-blue-700 hover:bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all inline-block shadow-2xl shadow-blue-900/50">
            View Visual Archive
          </Link>
        </div>
      </Section>

      {/* Modern Admissions CTA */}
      <section className="bg-white py-32 relative overflow-hidden">
        {/* Background Geometric Decorations */}
        <div className="absolute top-0 left-10 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-30"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -z-10 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-blue-950 mb-8 font-display tracking-tight leading-none uppercase">
              Begin Your <span className="text-blue-700">Champions</span> Journey
            </h2>
            <p className="text-slate-500 text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Step into a school where every student is trained for success. Schedule your campus walkthrough today.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/contact" className="bg-blue-950 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl shadow-blue-200">
                Contact Admissions
              </Link>
              <Link href="/admissions" className="bg-slate-50 text-blue-900 border-2 border-slate-200 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white hover:border-blue-200 transition-all">
                Admission Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
