import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const readStoredTheme = () => {
  if (typeof window === 'undefined') return null;

  try {
    return window.localStorage.getItem('theme');
  } catch {
    return null;
  }
};

const writeStoredTheme = (theme: 'dark' | 'light') => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem('theme', theme);
  } catch {
    // ignore storage failures (private mode / blocked storage)
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = readStoredTheme();
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    writeStoredTheme(isDark ? 'dark' : 'light');

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
