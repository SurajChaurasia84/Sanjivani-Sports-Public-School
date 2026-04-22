import React from 'react';

const Card = ({ title, description, icon: Icon, imageUrl, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {imageUrl && (
        <div className="h-56 w-full overflow-hidden relative z-10">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}
      {(Icon || title || description || children) && (
        <div className="p-6">
          {Icon && (
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Icon size={24} />
            </div>
          )}
          {title && <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>}
          {description && <p className="text-slate-600 mb-4">{description}</p>}
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
