'use client';

import { MainContextModel } from '@/models/context/mainContextModel';
import { createContext, useCallback, useMemo, useState } from 'react';
const initialStates: MainContextModel = {
  count1: 0,
  count2: 0,
  incrementCount1: () => {},
  incrementCount2: () => {},
};
export const ThemeContext = createContext(initialStates);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count1, setCount1] = useState(initialStates.count1);
  const [count2, setCount2] = useState(initialStates.count2);

  const incrementCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const incrementCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const obj: MainContextModel = useMemo(() => {
    return { count1, count2, incrementCount1, incrementCount2 };
  }, [count1, count2, incrementCount1, incrementCount2]);
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
}
