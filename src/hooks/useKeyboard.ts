import { useEffect } from 'react';
import { useFlickController } from './useFlickController';

interface UseKeyboardOptions {
  ref: React.RefObject<HTMLElement | null>;
  sectionCount: number;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
}

export function useKeyboard({
  ref,
  sectionCount,
  startIndex = 0,
  onSectionChange,
}: UseKeyboardOptions) {
  const { currentIndex, scrollToSection } = useFlickController(ref, {
    sectionCount,
    startIndex,
    onSectionChange,
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        scrollToSection(currentIndex.current + 1);
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToSection(currentIndex.current - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [ref, sectionCount, scrollToSection]);

  useEffect(() => {
    scrollToSection(startIndex);
  }, []);
}
