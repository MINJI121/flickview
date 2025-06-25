import { useRef } from 'react';

type UseFlickControllerOptions = {
  sectionCount: number;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
};

export function useFlickController(
  ref: React.RefObject<HTMLElement | null>,
  { sectionCount, startIndex = 0, onSectionChange }: UseFlickControllerOptions,
) {
  const currentIndex = useRef(startIndex);

  const scrollToSection = (index: number) => {
    const node = ref.current;
    if (!node) return;

    const clampedIndex = Math.max(0, Math.min(index, sectionCount - 1));
    const offsetTop = clampedIndex * window.innerHeight;

    node.scrollTo({ top: offsetTop, behavior: 'smooth' });
    currentIndex.current = clampedIndex;
    onSectionChange?.(clampedIndex);
  };

  return {
    scrollToSection,
    currentIndex,
  };
}
