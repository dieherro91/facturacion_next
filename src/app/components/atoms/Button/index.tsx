'use client';

import { ButtonProps } from './ButtonModel';
import ButtonStyle from './button.module.css';

export const Button = ({
  primary = true,
  size = 'medium',
  label,
  ...rest
}: ButtonProps) => {
  const mode = primary
    ? ButtonStyle['storybook-button--primary']
    : ButtonStyle['storybook-button--secondary'];
  return (
    <button
      className={[
        ButtonStyle['storybook-button'],
        ButtonStyle[`storybook-button--${size}`],
        mode,
      ].join(' ')}
      {...rest}
    >
      {label}
    </button>
  );
};
