import { useEffect, useRef } from 'react';

type UseTouchOptions = {
  ref: React.RefObject<HTMLElement | null>;
  currentIndex: React.RefObject<number>;
  sectionCount: number;
  scrollToSection: (index: number) => void;
};

export function useTouch({ ref, currentIndex, sectionCount, scrollToSection }: UseTouchOptions) {
  const startY = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleTouchStart = (e: TouchEvent) => {
      startY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startY.current === null) return;
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY.current - endY;

      const threshold = 30;
      if (Math.abs(deltaY) > threshold) {
        const direction = deltaY > 0 ? 1 : -1;
        scrollToSection(currentIndex.current + direction);
      }

      startY.current = null;
    };

    node.addEventListener('touchstart', handleTouchStart);
    node.addEventListener('touchend', handleTouchEnd);

    return () => {
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchend', handleTouchEnd);
    };
  }, [ref, sectionCount, scrollToSection]);
}
