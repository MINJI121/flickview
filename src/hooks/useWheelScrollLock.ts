// Prevent MagSpeed: 로지텍 등 고속 휠 입력에서 index가 중복 증가되는 문제, 완벽 방지하지 못함

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
