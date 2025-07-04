import { useRef } from 'react';

export function useWheelScrollLock(animationDuration = 800) {
  const isScrolling = useRef(false);

  const startScroll = () => {
    if (isScrolling.current) return false;

    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, animationDuration);

    return true;
  };

  return startScroll;
}
