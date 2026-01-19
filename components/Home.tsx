
import React from 'react';

const HOME: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 w-full py-20 md:py-0 h-screen bg-white">
      <div className="mb-8 px-4 py-2 bg-zinc-900 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] animate-fade-in">
        Available for new projects
      </div>
      <h1 className="text-6xl md:text-[12rem] font-extrabold tracking-tighter leading-[0.85] mb-6 select-none flex flex-col items-center">
        <span>PORT</span>
        <span className="text-zinc-900/10 outline-text md:ml-40" style={{ WebkitTextStroke: '1px #18181b' }}>FOLIO</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 text-lg md:text-2xl font-bold text-zinc-800">
        <span className="uppercase tracking-widest">Bayu Oscar</span>
        <div className="hidden md:block w-12 h-[2px] bg-zinc-900"></div>
        <span className="uppercase tracking-widest opacity-60">Frontend Developer</span>
      </div>
      
      <div className="mt-16 flex flex-col items-center gap-4">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Scroll to explore</p>
        <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-900 to-transparent"></div>
      </div>
    </div>
  );
};

export default HOME;
