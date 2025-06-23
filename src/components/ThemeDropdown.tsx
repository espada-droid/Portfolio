
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeDropdown: React.FC = () => {
  const { setTheme, themeName, currentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeButtons = [
    { name: 'black', color: '#000000', label: 'Black', textColor: '#ffffff' },
    { name: 'purple', color: '#0d0a1b', label: 'Purple', textColor: '#e2e8f0' },
    { name: 'teal', color: '#77afaf', label: 'Teal', textColor: '#0a0a0a' },
    { name: 'mint', color: '#e0fdee', label: 'Mint', textColor: '#064e3b' },
    { name: 'white', color: '#ffffff', label: 'White', textColor: '#0a0a0a' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110
          ${isOpen ? 'border-white shadow-lg scale-110' : 'border-gray-400'}
        `}
        style={{ backgroundColor: currentTheme.colors.accent }}
        aria-label="Theme switcher"
      />
      
      {isOpen && (
        <div 
          className="absolute top-0 right-10 flex items-center gap-2 p-2 rounded-lg border backdrop-blur-md transition-all duration-300"
          style={{ 
            backgroundColor: `${currentTheme.colors.background}95`,
            borderColor: currentTheme.colors.border
          }}
        >
          {themeButtons.map((theme, index) => (
            <button
              key={theme.name}
              onClick={() => {
                setTheme(theme.name);
                setIsOpen(false);
              }}
              className={`
                w-6 h-6 rounded-full border-2 transition-all duration-300 hover:scale-110 relative
                ${themeName === theme.name ? 'border-white shadow-lg scale-110' : 'border-gray-400'}
              `}
              style={{ 
                backgroundColor: theme.color,
                animationDelay: `${index * 50}ms`,
                border: theme.name === 'teal' ? '2px solid #0a0a0a' : undefined
              }}
              aria-label={`Switch to ${theme.label} theme`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
