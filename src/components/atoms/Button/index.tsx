'use client';

import { ButtonProps } from './ButtonModel';
import ButtonStyle from './button.module.css';

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...rest
}: ButtonProps) => {
  const mode = primary
    ? ButtonStyle['main-button--primary']
    : ButtonStyle['main-button--secondary'];
  return (
    <button
      className={[
        ButtonStyle['main-button'],
        ButtonStyle[`main-button--${size}`],
        mode,
      ].join(' ')}
      {...rest}
    >
      {label}
    </button>
  );
};
