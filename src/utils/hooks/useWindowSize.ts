'use client';

import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
  isLandscape: boolean;
  isPortrait: boolean;
}

// from https://usehooks.com/useWindowSize/
export function useWindowSize() {
  const _window = typeof window !== 'undefined' ? window : { innerWidth: 390, innerHeight: 844 };

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: _window.innerWidth,
    height: _window.innerHeight,
    isLandscape: _window.innerWidth > _window.innerHeight,
    isPortrait: _window.innerHeight > _window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isLandscape: window.innerWidth > window.innerHeight,
        isPortrait: window.innerHeight > window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
