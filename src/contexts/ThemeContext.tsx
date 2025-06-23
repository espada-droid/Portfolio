import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    card: string;
    border: string;
  };
}

const themes: Record<string, Theme> = {
  black: {
    name: 'Black',
    colors: {
      background: '#000000',
      foreground: '#ffffff',
      primary: '#317DE5',
      secondary: '#1a1a1a',
      accent: '#317DE5',
      muted: '#666666',
      card: '#111111',
      border: '#333333',
    },
  },
  purple: {
    name: 'Purple',
    colors: {
      background: '#0d0a1b',
      foreground: '#e2e8f0',
      primary: '#8b5cf6',
      secondary: '#1e1b2e',
      accent: '#a855f7',
      muted: '#64748b',
      card: '#1a1625',
      border: '#2d2438',
    },
  },
  teal: {
    name: 'Teal',
    colors: {
      background: '#77afaf',
      foreground: '#0a0a0a',
      primary: '#1e3a3a',
      secondary: '#5f9999',
      accent: '#ffffff',
      muted: '#1e3a3a',
      card: '#94c5c5',
      border: '#0a0a0a',
    },
  },
  mint: {
    name: 'Mint',
    colors: {
      background: '#e0fdee',
      foreground: '#064e3b',
      primary: '#059669',
      secondary: '#d1fae5',
      accent: '#10b981',
      muted: '#6b7280',
      card: '#ecfdf5',
      border: '#a7f3d0',
    },
  },
  white: {
    name: 'White',
    colors: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      primary: '#317DE5',
      secondary: '#f8fafc',
      accent: '#2563eb',
      muted: '#64748b',
      card: '#f1f5f9',
      border: '#e2e8f0',
    },
  },
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState('black');
  const currentTheme = themes[themeName];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [currentTheme]);

  const setTheme = (name: string) => {
    if (themes[name]) {
      setThemeName(name);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
