
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();

  const timeline = [
    {
      date: 'Jan 2025',
      title: 'Color Journey Begins',
      description: 'Discovered the power of color psychology in digital design and began self-teaching creative principles'
    },
    {
      date: 'Feb 2025',
      title: 'First Color Experiments',
      description: 'Created vibrant prototypes exploring how color influences user emotions and behavior'
    },
    {
      date: 'Mar 2025',
      title: 'Design Philosophy Evolved',
      description: 'Developed signature approach: functional beauty through purposeful color choices'
    }
  ];

  return (
    <section 
      id="about"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: currentTheme.colors.foreground }}
        >
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 
              className="text-3xl font-semibold mb-6"
              style={{ color: currentTheme.colors.accent }}
            >
              Color-Driven Designer
            </h3>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: currentTheme.colors.muted }}
            >
              Since January 2025, I've been obsessed with how color shapes digital experiences. 
              Every shade, gradient, and transition in my work serves a purpose—guiding users, 
              evoking emotions, and creating memorable interactions.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: currentTheme.colors.muted }}
            >
              My approach blends artistic intuition with functional design, creating interfaces 
              that are both visually striking and effortlessly usable. I believe great design 
              happens when creativity meets purpose.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 border-l-2 transition-all duration-300 hover:translate-x-2"
                style={{ borderColor: currentTheme.colors.accent }}
              >
                <div 
                  className="absolute -left-2 w-4 h-4 rounded-full"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                />
                <div 
                  className="text-sm font-medium mb-1"
                  style={{ color: currentTheme.colors.accent }}
                >
                  {item.date}
                </div>
                <h4 
                  className="text-xl font-semibold mb-2"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-base"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
