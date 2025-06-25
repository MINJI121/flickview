import { useEffect, useRef } from 'react';
import { useWheelScrollLock } from './useWheelThrottle';

type UseFlickViewOptions = {
  sectionCount: number;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
};

export function useFlickView(
  ref: React.RefObject<HTMLElement | null>,
  { sectionCount, startIndex = 0, onSectionChange }: UseFlickViewOptions,
) {
  const currentIndex = useRef(startIndex);
  const canScroll = useWheelScrollLock(800);

  const scrollToSection = (index: number) => {
    const node = ref.current;
    if (!node) return;

    const clampedIndex = Math.max(0, Math.min(index, sectionCount - 1));
    const offsetTop = clampedIndex * window.innerHeight;

    node.scrollTo({ top: offsetTop, behavior: 'smooth' });
    currentIndex.current = clampedIndex;
    onSectionChange?.(clampedIndex);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll()) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(currentIndex.current + direction);
    };

    node.addEventListener('wheel', onWheel, { passive: true });

    return () => {
      node.removeEventListener('wheel', onWheel);
    };
  }, [ref, sectionCount]);

  useEffect(() => {
    scrollToSection(startIndex);
  }, []);
}
