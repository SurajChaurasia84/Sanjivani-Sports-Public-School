import Link from 'next/link';
import { getData } from '@/lib/data';
import Section from '@/components/Section';
import Card from '@/components/Card';
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-blue-900/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 animate-fade-in">
              Nurturing Minds, <br />
              <span className="text-emerald-400">Excellence in Sports.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Sanjivani Sports Public School provides a holistic environment where academic rigor meets athletic prowess.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/admissions" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-emerald-900/20"
              >
                Admissions Open 2026-27 <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick Stats Overlay */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/50">
              {[
                { label: 'Excellence In', value: 'Education', icon: BookOpen },
                { label: 'State-of-the-art', value: 'Campus', icon: HostelIcon },
                { label: 'Championship', value: 'Sports', icon: Trophy },
                { label: 'Holistic', value: 'Development', icon: Users },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                    <p className="text-xl font-bold text-emerald-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section title="Why SSPS?" subtitle="Discover what makes our institution the perfect choice for your child's future.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            title="Academic Excellence" 
            description="CBSE curriculum focused on conceptual birding and innovative learning methodologies."
            icon={BookOpen}
          />
          <Card 
            title="Sports Integration" 
            description="Professional coaching in Cricket, Football, and Athletics integrated with daily schedule."
            icon={Trophy}
          />
          <Card 
            title="Hostel Facilities" 
            description="Safe, comfortable, and nurturing residential environment for outstation students."
            icon={HostelIcon}
          />
          <Card 
            title="Holistic Growth" 
            description="Focus on value education, character building, and personality development."
            icon={Users}
          />
        </div>
      </Section>

      {/* Facilities Preview */}
      <Section className="bg-slate-100" title="State-of-the-Art Facilities" subtitle="We provide premium infrastructure to support our students' diverse interests.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          <Link href="/facilities" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
            View All Facilities <ArrowRight size={20} />
          </Link>
        </div>
      </Section>

      {/* Notices & Events */}
      <Section title="Latest Notices" subtitle="Stay updated with the latest happenings and official announcements.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {latestNotices.map((notice) => (
              <div key={notice.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-6 items-start">
                <div className="bg-emerald-50 text-emerald-700 font-bold p-4 rounded-xl flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-2xl">{new Date(notice.date).getDate()}</span>
                  <span className="text-xs uppercase">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{notice.title}</h3>
                    {notice.isUrgent && <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Urgent</span>}
                  </div>
                  <p className="text-slate-600 line-clamp-2">{notice.description}</p>
                  <Link href={`/notices`} className="text-emerald-600 text-sm font-bold mt-4 inline-block hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <Bell className="text-emerald-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 font-display">Admissions Open for 2026-27</h3>
              <p className="text-emerald-100 mb-8 opacity-80 leading-relaxed">
                Join the Sanjivani community and embark on a journey of academic and sporting excellence. Limited seats available for Classes Nursery to IX.
              </p>
            </div>
            <Link 
              href="/admissions" 
              className="bg-white text-emerald-900 py-4 rounded-xl font-bold text-center relative z-10 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
            >
              Apply Online <ArrowUpRight size={20} />
            </Link>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </Section>

      {/* Gallery Highlight */}
      <Section className="bg-slate-900 text-white" title="Life at SSPS" subtitle="A glimpse into the vibrant campus life and sporting events.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {previewImages.map((img) => (
            <div key={img.id} className="aspect-square rounded-2xl overflow-hidden group">
              <img 
                src={img.image} 
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-all inline-block shadow-lg shadow-emerald-500/20">
            Visit Photo Gallery
          </Link>
        </div>
      </Section>

      {/* Footer Support CTA */}
      <section className="bg-emerald-600 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Ready to join our school?</h2>
            <p className="text-emerald-50 text-xl mb-10 opacity-90">
              Schedule a campus tour or contact our admissions office to learn more about the SSPS experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                Contact Us
              </Link>
              <Link href="/admissions" className="bg-emerald-900/30 text-white border border-emerald-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-900/50 transition-all">
                Admission Info
              </Link>
            </div>
          </div>
        </div>
        {/* Decorations */}
        <div className="absolute top-0 right-0 opacity-10"><GraduationCap size={400} /></div>
      </section>
    </div>
  );
}
