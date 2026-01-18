
import React from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-2 block">Capabilites</span>
            <h2 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-none">
              My Arsenal.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs font-medium text-sm md:text-base">
            Leveraging cutting-edge technologies to build fast, responsive, and high-quality digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Featured Skill Bento Box */}
          <div className="col-span-2 row-span-2 bg-zinc-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 text-[15rem] font-black opacity-10 group-hover:rotate-12 transition-transform duration-1000">JS</div>
            <div className="relative z-10">
               <h3 className="text-3xl md:text-5xl font-black mb-4">React & Next.js</h3>
               <p className="text-zinc-400 font-medium">Utilizing a core framework designed for building high-performance, large-scale applications.</p>
            </div>
            <div className="flex gap-2 relative z-10">
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">Advanced</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">6+ Years</span>
            </div>
          </div>

          {/* Regular Bento Boxes */}
          {SKILLS_DATA.flatMap(cat => cat.items).map((skill, idx) => (
            <div 
              key={skill.name} 
              className={`p-6 md:p-8 rounded-[2rem] border-2 border-zinc-100 flex flex-col justify-center items-center gap-4 hover:border-zinc-900 transition-all duration-300 group
                ${idx % 3 === 0 ? 'bg-[#E3D5B6]/20' : 'bg-white'}
              `}
            >
              <div className="w-12 h-12 rounded-2xl text-white flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                <img src={skill.img} alt={skill.name} />
              </div>
              <div className="text-center">
                <span className="text-sm md:text-lg font-bold text-zinc-900 block">{skill.name}</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{skill.level}% Mastery</span>
              </div>
            </div>
          ))}

          {/* More items on mobile/desktop as needed */}
          <div className="col-span-2 md:col-span-1 bg-zinc-100 rounded-[2rem] p-8 flex items-center justify-center">
             <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">And many more...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
