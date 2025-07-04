import { useRef } from 'react';

export function useLock(animationDuration = 800) {
  const startLock = useRef(false);

  const startScroll = () => {
    if (startLock.current) return false;

    startLock.current = true;
    setTimeout(() => {
      startLock.current = false;
    }, animationDuration);

    return true;
  };

  return startScroll;
}
