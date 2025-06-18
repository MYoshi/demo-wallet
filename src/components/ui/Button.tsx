import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'px-4 py-2 rounded font-semibold transition-colors focus:outline-none cursor-pointer ';
  let color = '';
  switch (variant) {
    case 'primary':
      color = 'bg-purple-600 text-white hover:bg-purple-700';
      break;
    case 'secondary':
      color = 'bg-gray-200 text-gray-900 hover:bg-gray-300';
      break;
    case 'danger':
      color = 'bg-red-500 text-white hover:bg-red-600';
      break;
  }
  return (
    <button type="button" className={`${base} ${color} ${className}`} {...props} />
  );
};
