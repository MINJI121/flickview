import { useRef } from 'react';

export function useKeyboardLock(animationDuration = 800) {
  const isLocking = useRef(false);

  const startLock = () => {
    if (isLocking.current) return false;

    isLocking.current = true;
    setTimeout(() => {
      isLocking.current = false;
    }, animationDuration);

    return true;
  };

  return startLock;
}
