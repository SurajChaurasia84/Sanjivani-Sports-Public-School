import React from 'react';

const Section = ({ children, title, subtitle, className = '', id = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
