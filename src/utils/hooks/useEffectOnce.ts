import { useEffect, useRef, type EffectCallback } from 'react';

export function useEffectOnce(effect: EffectCallback) {
  const effectCalled = useRef<boolean>(false);

  useEffect(() => {
    if (effectCalled.current === false) {
      effectCalled.current = true;
      return effect();
    }
  }, []);
}
