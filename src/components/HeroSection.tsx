import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.foreground
      }}
    >
      {/* Animated background particles */}
<div className="absolute inset-0 pointer-events-none z-0">
  {[...Array(20)].map((_, i) => {
    // Fixed random base position per dot
    const baseX = Math.random() * 100;
    const baseY = Math.random() * 100;

    // Gentle offset effect
    const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;

    return (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full opacity-20 transition-transform duration-[30ms] ease-out"
        style={{
          backgroundColor: currentTheme.colors.accent,
          left: `${baseX}%`,
          top: `${baseY}%`,
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          filter: `drop-shadow(0 0 6px ${currentTheme.colors.accent})`,
        }}
      />
    );
  })}
</div>


      {/* Cursor follower */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-10 opacity-50 transition-none duration-100 ease-out"
        style={{
          backgroundColor: currentTheme.colors.accent,
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <div
        className={`text-center z-20 transition-all duration-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
<h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight text-center">
  <span className="block">
    Designing{' '}
    <span
      className="text-highlighted"
      style={{ color: currentTheme.colors.accent, textShadow: `0 0 10px ${currentTheme.colors.accent}` }}
    >
      silence
    </span>
  </span>
  <span className="block">
    into{' '}
    <span
      className="text-highlighted"
      style={{ color: currentTheme.colors.accent, textShadow: `0 0 10px ${currentTheme.colors.accent}` }}
    >
      experience
    </span>
  </span>
</h1>


        <p className="text-xl md:text-2xl mb-4 opacity-80">
          Creative Design & Functional Beauty
        </p>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-2"
          style={{ color: currentTheme.colors.muted }}
        >
          I'm{' '}
          <span className="font-semibold" style={{ color: currentTheme.colors.accent }}>
            Jaiwardhan Panwar
          </span>
          , exploring the intersection of color, creativity, and code.
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center">
          <div
            className="relative cursor-pointer group flex flex-col items-center"
            onClick={scrollToAbout}
          >
            <div className="w-0.5 h-16" style={{ backgroundColor: currentTheme.colors.muted }} />
            <div
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-1000 group-hover:scale-110 -mt-4 z-10"
              style={{
                borderColor: currentTheme.colors.accent,
                backgroundColor: currentTheme.colors.background,
                animation: 'bounce 3s infinite'
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.colors.accent }} />
            </div>
          </div>
          <p
            className="text-sm mt-2 opacity-70 cursor-pointer"
            style={{ color: currentTheme.colors.muted }}
            onClick={scrollToAbout}
          >
            scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
