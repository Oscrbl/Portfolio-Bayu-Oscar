
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HERO);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: SectionId.HERO, component: <Hero /> },
    { id: SectionId.ABOUT, component: <About /> },
    { id: SectionId.SKILLS, component: <Skills /> },
    { id: SectionId.EXPERIENCE, component: <Experience /> },
    { id: SectionId.CONTACT, component: <Contact /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // Simple intersection on mobile
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section.id);
            }
          }
        }
      } else {
        const scrollPosition = containerRef.current.scrollTop;
        const height = window.innerHeight;
        const index = Math.round(scrollPosition / height);
        const newActive = sections[index]?.id;
        if (newActive && newActive !== activeSection) {
          setActiveSection(newActive);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative bg-[#E3D5B6]">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main 
        ref={containerRef}
        className="scroll-snap-container w-full"
      >
        {sections.map((section) => (
          <section 
            key={section.id} 
            id={section.id} 
            className="scroll-snap-section w-full flex flex-col items-center justify-center relative"
          >
            {section.component}
          </section>
        ))}
      </main>

      <Pagination 
        activeSection={activeSection} 
        onPageClick={scrollToSection} 
      />
    </div>
  );
};

export default App;
