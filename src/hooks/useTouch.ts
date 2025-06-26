import { useEffect } from 'react';
import { useFlickController } from './useFlickController';

interface UseTouchOptions {
  ref: React.RefObject<HTMLElement | null>;
  sectionCount: number;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
}

export function useTouch({ ref, sectionCount, startIndex = 0, onSectionChange }: UseTouchOptions) {
  const { currentIndex, scrollToSection } = useFlickController(ref, {
    sectionCount,
    startIndex,
    onSectionChange,
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (Math.abs(deltaY) < 50) return;
      const direction = deltaY > 0 ? 1 : -1;
      scrollToSection(currentIndex.current + direction);
    };

    node.addEventListener('touchstart', onTouchStart);
    node.addEventListener('touchend', onTouchEnd);

    return () => {
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [ref, sectionCount, scrollToSection]);

  useEffect(() => {
    scrollToSection(startIndex);
  }, []);
}
