
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SkillsSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: 'Color Theory', level: 95, category: 'Design' },
    { name: 'Figma', level: 90, category: 'Tools' },
    { name: 'Visual Hierarchy', level: 88, category: 'Design' },
    { name: 'React', level: 80, category: 'Code' },
    { name: 'Tailwind CSS', level: 85, category: 'Code' },
    { name: 'Typography', level: 82, category: 'Design' },
    { name: 'Brand Identity', level: 78, category: 'Strategy' },
    { name: 'User Research', level: 75, category: 'Strategy' }
  ];

  return (
    <section 
      id="skills"
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: currentTheme.colors.foreground }}
        >
          Creative Toolkit
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div 
                className="p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: currentTheme.colors.card,
                  borderColor: hoveredSkill === index ? currentTheme.colors.accent : currentTheme.colors.border,
                  borderWidth: '2px',
                  borderStyle: 'solid'
                }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center text-xl font-bold"
                  style={{ backgroundColor: currentTheme.colors.accent, color: currentTheme.colors.background }}
                >
                  {skill.name.charAt(0)}
                </div>
                
                <h3 
                  className="font-semibold mb-2"
                  style={{ color: currentTheme.colors.foreground }}
                >
                  {skill.name}
                </h3>
                
                <p 
                  className="text-sm mb-3"
                  style={{ color: currentTheme.colors.muted }}
                >
                  {skill.category}
                </p>

                {/* Skill level bar */}
                <div 
                  className="w-full h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: currentTheme.colors.secondary }}
                >
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      backgroundColor: currentTheme.colors.accent,
                      width: hoveredSkill === index ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
                
                {hoveredSkill === index && (
                  <div 
                    className="text-xs mt-2 font-medium"
                    style={{ color: currentTheme.colors.accent }}
                  >
                    {skill.level}%
                  </div>
                )}
              </div>

              {/* Tooltip */}
              {hoveredSkill === index && (
                <div 
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full px-3 py-1 rounded text-xs font-medium whitespace-nowrap z-10"
                  style={{ 
                    backgroundColor: currentTheme.colors.foreground,
                    color: currentTheme.colors.background
                  }}
                >
                  {skill.level}% mastery
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                    style={{ borderTopColor: currentTheme.colors.foreground }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
