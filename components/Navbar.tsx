
import React from 'react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onNavClick: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: SectionId.HERO, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.EXPERIENCE, label: 'Work' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none">
      <div 
        className="text-2xl font-black tracking-tighter pointer-events-auto cursor-pointer bg-zinc-900 text-white px-4 py-1.5 rounded-full" 
        onClick={() => onNavClick(SectionId.HERO)}
      >
        BO.
      </div>
      
      <div className="hidden md:flex gap-2 bg-white/80 backdrop-blur-xl px-2 py-2 rounded-full border border-white shadow-2xl pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full ${
              activeSection === item.id 
                ? 'bg-zinc-900 text-white' 
                : 'text-zinc-400 hover:text-zinc-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="pointer-events-auto">
        {/* <button className="px-6 py-3 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
          LET'S TALK
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
