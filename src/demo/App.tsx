import { useRef } from 'react';
import { useWheel } from '../hooks/useWheel';
import { useKeyboard } from '../hooks/useKeyboard';
import { useTouch } from '../hooks/useTouch';

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useWheel({ ref: containerRef, sectionCount: 5 });
  useKeyboard({ ref: containerRef, sectionCount: 5 });
  useTouch({ ref: containerRef, sectionCount: 5 });

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <section style={{ height: '100vh', backgroundColor: '#f99' }}>1</section>
      <section style={{ height: '100vh', backgroundColor: '#9f9' }}>2</section>
      <section style={{ height: '100vh', backgroundColor: '#99f' }}>3</section>
      <section style={{ height: '100vh', backgroundColor: '#f95' }}>4</section>
      <section style={{ height: '100vh', backgroundColor: '#2f9' }}>5</section>
    </div>
  );
}

export default App;
