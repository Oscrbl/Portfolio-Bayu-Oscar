
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
            <p>Hi, I’m Bayu Oscar, a dedicated <span className="text-zinc-900 font-bold">Frontend Web Developer</span> with a strong passion for turning creative designs into interactive and highly informative web experiences. I believe that a website should not only look visually stunning but also provide a seamless and engaging journey for every user who visits it."</p>
            <p>My journey in the tech world began in 2019, and since then, I have been deeply immersed in mastering the core foundations of web development: HTML, CSS, and JavaScript. Over the years, I have refined my skills to ensure that every line of code I write contributes to a high-performing and responsive digital product.</p>
            <p>What I love most about this profession is the constant challenge of bringing static ideas to life through logic and creativity. I am always eager to learn new technologies and contribute to meaningful projects. I look forward to the possibility of collaborating with you soon and creating something great together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
