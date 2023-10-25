'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { lightTheme, darkTheme } from '../layout/Themes/index';
import { ModelTheme } from '@/layout/Themes/themeModel';

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  themes: ModelTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themes: ModelTheme = useMemo(() => {
    return theme === 'light' ? lightTheme : darkTheme;
  }, [theme]);

  const themeObject: ThemeContextType = useMemo(() => {
    return { theme, toggleTheme, themes };
  }, [theme, themes]);

  useEffect(() => {
    if (themes) {
      document.documentElement.style.setProperty(
        '--theme-primary-color',
        themes.primaryColor,
      );
      document.documentElement.style.setProperty(
        '--theme-secondary-color',
        themes.secondaryColor,
      );
      document.documentElement.style.setProperty(
        '--theme-background-color',
        themes.backgroundColor,
      );
      document.documentElement.style.setProperty(
        '--theme-text-color',
        themes.textColor,
      );
      document.documentElement.style.setProperty(
        '--theme-link-color',
        themes.linkColor,
      );
      document.documentElement.style.setProperty(
        '--theme-error-color',
        themes.errorColor,
      );
      document.documentElement.style.setProperty(
        '--theme-success-color',
        themes.successColor,
      );
      document.documentElement.style.setProperty(
        '--theme-warning-color',
        themes.warningColor,
      );
      document.documentElement.style.setProperty(
        '--theme-info-color',
        themes.infoColor,
      );
      document.documentElement.style.setProperty(
        '--theme-accent-color',
        themes.accentColor,
      );
    }
  }, [theme, themes]);
  return (
    <ThemeContext.Provider value={themeObject}>
      {children}
    </ThemeContext.Provider>
  );
}
