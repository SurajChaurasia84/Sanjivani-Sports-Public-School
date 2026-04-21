import Link from 'next/link';
import { getData } from '@/lib/data';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import { ArrowRight, BookOpen, Users, Trophy, Home as HostelIcon, Bell, GraduationCap, ArrowUpRight } from 'lucide-react';

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


      <div className="pt-24 md:pt-40">
        {/* Highlights Section */}
        <Section title="Why Sanjivani?" subtitle="We combine world-class sports facilities with a rigorous academic curriculum to build the leaders of tomorrow.">
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
      </div>

      {/* Facilities Preview */}
      <Section className="bg-slate-50/50" title="Campus Excellence" subtitle="Premium infrastructure designed to maximize indoor and outdoor learning possibilities.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {featuredFacilities.map((facility) => (
            <Card 
              key={facility.id}
              title={facility.name} 
              description={facility.description}
              imageUrl={`https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800`}
            />
          ))}
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
            <Link 
              href="/admissions" 
              className="bg-white text-blue-950 py-5 rounded-2xl font-black text-center relative z-10 hover:bg-blue-50 transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl"
            >
              Start Application <ArrowUpRight size={22} />
            </Link>
            {/* Geometric Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800/20 rounded-xl -rotate-12 translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </Section>

      {/* Gallery Showcase */}
      <Section className="bg-blue-950 text-white" title="The Sanjivani Experience" subtitle="Capturing the spirit of competition and academic breakthrough at our campus.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {previewImages.map((img) => (
            <div key={img.id} className="aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl relative">
              <img 
                src={img.image} 
                alt={img.caption}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-bold uppercase tracking-widest">{img.caption}</p>
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
