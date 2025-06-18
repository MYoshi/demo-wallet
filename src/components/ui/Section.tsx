import React from 'react';

export const Section: React.FC<React.PropsWithChildren<{ title?: string; className?: string }>> = ({ title, className = '', children }) => (
  <section className={`mb-8 ${className}`}>
    {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
    {children}
  </section>
);
