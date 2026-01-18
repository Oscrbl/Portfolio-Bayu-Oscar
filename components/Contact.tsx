
import { LIST_PLATFORM } from '@/constants';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white overflow-hidden" style={{height: "100vh", width: "100%"}}>
      {/* Visual Text Area */}
      <div className="w-full flex items-center justify-center p-8 md:p-20 bg-zinc-900" style={{height: "100vh", width: "100%"}}>
        <div className="relative">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Ready to start?</span>
          <h2 className="text-6xl md:text-[10rem] font-black leading-none tracking-tighter text-white">
            LET'S<br/><span className="text-zinc-700">TALK.</span>
          </h2>
          
          <div className="mt-12 flex flex-wrap gap-4">
            {LIST_PLATFORM.map((platform, i) => (
              <a key={`platform-${i}`} href={platform.link} target="_blank" className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all">
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
