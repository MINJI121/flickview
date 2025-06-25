import { useEffect } from 'react';

type Direction = 1 | -1;

interface UseKeyboardOptions {
  onKeyInput: (direction: Direction) => void;
}

export function useKeyboard({ onKeyInput }: UseKeyboardOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        onKeyInput(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        onKeyInput(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyInput]);
}
