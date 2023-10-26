'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import ButtonThemeStyle from './buttonTheme.module.css';
import { ButtonThemeProps } from './ButtonModel';

export const ButtonTheme = ({ onClick, type, ...rest }: ButtonThemeProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      className={ButtonThemeStyle['theme-button']}
      type={type ?? 'button'}
      onClick={(e) => {
        toggleTheme();
        if (onClick && typeof onClick === 'function') {
          onClick(e);
        }
      }}
      {...rest}
    >
      {theme === 'light' ? (
        <FaMoon className={ButtonThemeStyle['icon-theme']} />
      ) : (
        <FaSun className={ButtonThemeStyle['icon-theme']} />
      )}
    </button>
  );
};
