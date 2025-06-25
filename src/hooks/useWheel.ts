import { useEffect } from 'react';
import { useWheelScrollLock } from './useWheelScrollLock';

type UseWheelOptions = {
  ref: React.RefObject<HTMLElement | null>;
  currentIndex: React.RefObject<number>;
  sectionCount: number;
  scrollToSection: (index: number) => void;
};

export function useWheel({ ref, currentIndex, sectionCount, scrollToSection }: UseWheelOptions) {
  const canScroll = useWheelScrollLock(800);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll()) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(currentIndex.current + direction);
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [ref, sectionCount, scrollToSection]);
}
