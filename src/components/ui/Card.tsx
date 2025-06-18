import React from 'react';

export type CardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, className = '', children }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    {title && (
      <h2 className="text-xl font-bold mb-4 border-b border-gray-100 pb-2 tracking-tight">
        {title}
      </h2>
    )}
    {children}
  </div>
);
