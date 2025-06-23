
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeDropdown from './ThemeDropdown';

const Navbar: React.FC = () => {
  const { currentTheme } = useTheme();

  const navItems = [
    { name: 'Contact', href: '#contact' },
    { name: 'About', href: '#about' },
    { name: 'Experiments', href: '#experiments' },
    { name: 'Skills', href: '#skills' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b"
      style={{ 
        backgroundColor: `${currentTheme.colors.background}80`,
        borderColor: currentTheme.colors.border
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand logo */}
          <div 
            className="text-xl font-bold tracking-tight"
            style={{ color: currentTheme.colors.foreground }}
          >
            JP.
          </div>
          
          {/* Centered navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-colors duration-200 hover:scale-105"
                  style={{ color: currentTheme.colors.muted }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = currentTheme.colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = currentTheme.colors.muted;
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme dropdown */}
          <div className="flex items-center">
            <ThemeDropdown />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2"
              style={{ color: currentTheme.colors.foreground }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
