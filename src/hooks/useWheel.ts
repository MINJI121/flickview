import { useEffect } from 'react';
import { useFlickController } from './useFlickController';
import { useLock } from './useLock';

interface UseWheelOptions {
  ref: React.RefObject<HTMLElement | null>;
  sectionCount: number;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
}

export function useWheel({ ref, sectionCount, startIndex = 0, onSectionChange }: UseWheelOptions) {
  const { currentIndex, scrollToSection } = useFlickController(ref, {
    sectionCount,
    startIndex,
    onSectionChange,
  });

  const startLock = useLock(800);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!startLock()) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(currentIndex.current + direction);
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [ref, sectionCount, scrollToSection]);

  useEffect(() => {
    scrollToSection(startIndex);
  }, []);
}
