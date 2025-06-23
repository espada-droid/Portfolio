import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ExperimentsSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiments = [
    {
      title: 'AI Tools & API Marketplace',
      description: 'Vibrant marketplace interface with dynamic color-coded categories and smart visual hierarchy',
      badge: 'Dev Mode',
      type: 'Color System',
      link: 'https://www.figma.com/proto/DDtIsVzSnjpnduhDY6kfaR/AI-Store?node-id=92-7&starting-point-node-id=92%3A7&t=hDnEJVUgrrWt6Apb-1'
    },
    {
      title: 'Pulse Music Web-app UI',
      description: 'Music streaming interface with reactive color themes that pulse with the beat',
      badge: 'Interactive',
      type: 'Motion Design',
      link: 'https://www.figma.com/proto/5QkQTRymNCXe6UM2AcQ8Ei/Pulse?node-id=1-2&starting-point-node-id=1%3A2&t=FGvAOp31fEAQbAry-1'
    }
  ];

  return (
    <section 
      id="experiments"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: currentTheme.colors.secondary }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: currentTheme.colors.foreground }}
        >
          Experiments
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <a
              key={index}
              href={experiment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer block"
              style={{ 
                backgroundColor: currentTheme.colors.card,
                transform: hoveredCard === index ? 
                  'perspective(1000px) rotateY(5deg) rotateX(5deg) translateZ(20px)' : 
                  'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
                transformStyle: 'preserve-3d',
                boxShadow: hoveredCard === index ? 
                  `0 20px 40px ${currentTheme.colors.accent}30, 0 0 60px ${currentTheme.colors.accent}20` : 
                  '0 4px 8px rgba(0, 0, 0, 0.1)',
                filter: hoveredCard === index ? 
                  `drop-shadow(0 0 30px ${currentTheme.colors.accent}40)` : 
                  'none'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card content */}
              <div className="p-8 h-64 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span 
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        backgroundColor: currentTheme.colors.accent,
                        color: currentTheme.colors.background
                      }}
                    >
                      {experiment.badge}
                    </span>
                    <span 
                      className="text-sm"
                      style={{ color: currentTheme.colors.muted }}
                    >
                      {experiment.type}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: currentTheme.colors.foreground }}
                  >
                    {experiment.title}
                  </h3>
                  
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: currentTheme.colors.muted }}
                  >
                    {experiment.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span 
                    className="text-sm font-medium"
                    style={{ color: currentTheme.colors.accent }}
                  >
                    View Prototype →
                  </span>
                </div>
              </div>

              {/* Hover effect overlay */}
              {hoveredCard === index && (
                <div 
                  className="absolute inset-0 opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                />
              )}

              {/* Improved waveform effect for music app - smaller and positioned to avoid text */}
              {index === 1 && hoveredCard === index && (
                <div className="absolute bottom-4 right-4 w-12">
                  <div className="flex items-end gap-0.5 h-4">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-300 animate-pulse"
                        style={{
                          backgroundColor: currentTheme.colors.accent,
                          height: `${30 + Math.random() * 70}%`,
                          opacity: 0.8,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: '1.2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperimentsSection;
