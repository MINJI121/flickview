import { useEffect, useRef } from 'react';

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
  const isScrolling = useRef(false);

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
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = e.deltaY;
      if (delta > 0) {
        scrollToSection(currentIndex.current + 1);
      } else if (delta < 0) {
        scrollToSection(currentIndex.current - 1);
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
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
