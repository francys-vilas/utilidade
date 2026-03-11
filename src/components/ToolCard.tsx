import React from 'react';
import Link from 'next/link';

export interface ToolCardProps {
  title: string;
  description: string;
  category: 'dados' | 'imagens' | 'texto' | 'outros';
  icon: string;
  tags: string[];
  href: string;
}

const categoryColors = {
  dados: 'var(--color-info)',
  imagens: '#ed64a6',
  texto: 'var(--color-warning)',
  outros: 'var(--color-success)',
};

export const ToolCard: React.FC<ToolCardProps> = ({ title, description, category, icon, tags, href }) => {
  return (
    <Link 
      href={href}
      className="group relative flex flex-col bg-card-bg border border-border-subtle rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#cbd5e0] shadow-sm h-full cursor-pointer"
      style={{ '--card-color': categoryColors[category] } as React.CSSProperties}
    >
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-[var(--card-color)]"
      />
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#f7fafc] border border-border-subtle text-2xl text-[var(--card-color)] shadow-sm group-hover:scale-105 transition-transform">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-[#2d3748]">{title}</h2>
      </div>
      
      <p className="text-text-muted text-sm leading-relaxed flex-grow mb-6">
        {description}
      </p>
      
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md bg-[#edf2f7] text-[#4a5568] font-semibold border border-[#e2e8f0]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};
