import React from 'react';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm outline-none cursor-pointer
        ${isActive 
          ? 'bg-primary text-white border border-primary shadow-[0_4px_6px_-1px_rgba(24,100,248,0.2),0_2px_4px_-1px_rgba(24,100,248,0.1)]' 
          : 'bg-card-bg border border-border-subtle text-text-muted hover:border-[#cbd5e0] hover:bg-[#f8fafc] hover:text-text-main'
        }`}
    >
      {label}
    </button>
  );
};
