
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#E3D5B6] flex flex-col items-center">
      <div className="w-full bg-zinc-900 py-20 px-6 flex flex-col items-center text-center">
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-4 block">Timeline</span>
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">
          Project Journey.
        </h2>
      </div>
      
      <div className="w-full max-w-7xl px-6 py-12 md:py-24 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {EXPERIENCE_DATA.map((exp) => (
            <div 
              key={exp.id} 
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-zinc-900/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {exp.period}
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="mb-6">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 block">
                    {exp.company}
                  </span>
                  <h3 className="text-2xl md:text-2xl font-black text-zinc-900 leading-tight">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 flex-1 font-medium">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 border border-zinc-200 text-zinc-600 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
