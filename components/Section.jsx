import React from 'react';

const Section = ({ children, title, subtitle, className = '', id = '', showDecor = true }) => {
  return (
    <section id={id} className={`py-16 md:py-32 relative overflow-hidden ${className}`}>
      {showDecor && (
        <>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-slate-100/50 rounded-2xl rotate-12 -z-10 shadow-inner"></div>
          <div className="absolute top-1/3 left-10 w-24 h-24 border border-blue-100 rounded-full -z-10 opacity-20"></div>
          <div className="absolute bottom-1/4 right-20 w-32 h-32 border-2 border-slate-100 rotate-45 -z-10 opacity-30"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {title && (
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight">{title}</h2>
            {subtitle && <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
            <div className="w-24 h-2 bg-blue-700 mx-auto mt-8 rounded-full shadow-lg shadow-blue-100"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};


export default Section;
