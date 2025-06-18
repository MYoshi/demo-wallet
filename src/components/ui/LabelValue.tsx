import React from 'react';

export type LabelValueProps = {
  label: string;
  value: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export const LabelValue: React.FC<LabelValueProps> = ({ label, value, action, className = '' }) => (
  <div className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 ${className}`}>
    <span className="text-gray-500 font-medium min-w-[80px]">
      {label}
      :
    </span>
    <span className="break-all font-mono text-sm bg-gray-100 rounded px-2 py-1 select-all flex-1">{value}</span>
    {action && <span>{action}</span>}
  </div>
);
