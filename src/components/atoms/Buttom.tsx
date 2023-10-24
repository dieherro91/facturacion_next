'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/mainProvider';

export const Button = () => {
  const { count1, count2, incrementCount1, incrementCount2 } =
    useContext(ThemeContext);
  return (
    <>
      <button type="button" onClick={() => incrementCount1()}>
        Click me &nbsp;
        {count1}
      </button>
      <button type="button" onClick={() => incrementCount2()}>
        Click me &nbsp;
        {count2}
      </button>
    </>
  );
};
