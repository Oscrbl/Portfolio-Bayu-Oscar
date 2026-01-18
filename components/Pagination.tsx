
import React from 'react';
import { SectionId } from '../types';

interface PaginationProps {
  activeSection: SectionId;
  onPageClick: (id: SectionId) => void;
}

const Pagination: React.FC<PaginationProps> = ({ activeSection, onPageClick }) => {
  const sections = Object.values(SectionId);
  return (
    <div className="fixed bottom-10 right-8 md:right-12 z-50 flex flex-col gap-3">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => onPageClick(id)}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${id}`}
        >
          <span className={`
            mr-4 text-[10px] ${activeSection === SectionId.CONTACT ? "text-white" : "font-black"} uppercase tracking-widest transition-all duration-300
            ${activeSection === id ? 'opacity-100 translate-x-0 text-zinc-900' : 'opacity-0 translate-x-4 pointer-events-none'}
          `}>
            {id}
          </span>
          <div className={`
            h-1.5 transition-all duration-500 rounded-full
            ${activeSection === id ? `${activeSection === SectionId.CONTACT ? 'w-12 bg-zinc-300 group-hover:w-12 group-hover:bg-zinc-500' : 'w-12 bg-zinc-900'}` : 'w-4 bg-zinc-300 group-hover:w-8 group-hover:bg-zinc-500'}
          `} />
        </button>
      ))}
    </div>
  );
};

export default Pagination;
