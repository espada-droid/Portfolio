
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { setTheme, themeName, currentTheme } = useTheme();

  const themeButtons = [
    { name: 'black', color: '#000000', label: 'Black' },
    { name: 'purple', color: '#0d0a1b', label: 'Purple' },
    { name: 'teal', color: '#77afaf', label: 'Teal' },
    { name: 'mint', color: '#e0fdee', label: 'Mint' },
    { name: 'white', color: '#ffffff', label: 'White' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      {themeButtons.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme.name)}
          className={`
            w-8 h-8 rounded-full border-2 transition-all duration-300 hover:scale-110
            ${themeName === theme.name ? 'border-white shadow-lg scale-110' : 'border-gray-400'}
          `}
          style={{ backgroundColor: theme.color }}
          aria-label={`Switch to ${theme.label} theme`}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
