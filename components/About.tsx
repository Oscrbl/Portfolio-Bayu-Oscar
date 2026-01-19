
import React from 'react';
import bayu from '@/assets/bayu.png';

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-[#E3D5B6] overflow-hidden heightFull">
      {/* Visual Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden bg-zinc-900/5">
        <img 
          src={bayu} 
          alt="Portrait"
          style={{height:"100%", width: "100%", objectFit: "cover", top: 0}}
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-20 py-16 md:py-0">
        <div className="max-w-xl">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4 block">Introduction</span>
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-zinc-900 leading-none">
            Digital<br/>Architect.
          </h2>
          
          <div className="space-y-6 text-zinc-600 leading-relaxed text-base md:text-lg font-medium">
            <p>Hi there! I’m Bayu Oscar, a <span className="text-zinc-900 font-bold">Frontend Developer</span> passionate about turning designs into informative and interactive experiences. I believe a great interface should communicate clearly and feel natural to the user. That’s why I focus on clarity, consistency, and a seamless user experience in everything I build. I’m always learning and looking for ways to level up my craft. I’d love to connect and see how we can work together!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
