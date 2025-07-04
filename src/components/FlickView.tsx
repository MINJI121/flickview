import React from 'react';
import { useRef } from 'react';
import { useWheel } from '../hooks/useWheel';
import { useKeyboard } from '../hooks/useKeyboard';
import { useTouch } from '../hooks/useTouch';

type FlickViewProps = {
  children: React.ReactNode;
  startIndex?: number;
  onSectionChange?: (index: number) => void;
};

export function FlickView({ children, startIndex = 0, onSectionChange }: FlickViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionCount = React.Children.count(children);

  useWheel({ ref: containerRef, sectionCount, startIndex, onSectionChange });
  useKeyboard({ ref: containerRef, sectionCount, startIndex, onSectionChange });
  useTouch({ ref: containerRef, sectionCount, startIndex, onSectionChange });

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
