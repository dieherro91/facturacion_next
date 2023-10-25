'use client';

import { useTheme } from '@/context/ThemeContext';

export const ThemeButton: React.FC = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
