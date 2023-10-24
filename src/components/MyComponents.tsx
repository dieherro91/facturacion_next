'use client';
import { useState } from 'react';
import { useStylesComponent } from './styleComponent';
import { PropsMain } from '@models';

// NOTE: If you don't have a theme you can import { tss } from "tss-react";

export function MyComponent(props: PropsMain) {
  const { className } = props;

  const [color, setColor] = useState<'red' | 'blue'>('red');

  const { classes, cx } = useStylesComponent({ color });
  return (
    <>
      <span
        className={cx(classes.root, className)}
        onClick={() => setColor('blue')}
      >
        hello world
      </span>
    </>
  );
}
