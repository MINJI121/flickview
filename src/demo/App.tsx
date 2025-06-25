import { useRef } from 'react';
import { useFlickView } from '../hooks/useFlickView';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useFlickView(containerRef, {
    sectionCount: 5,
    startIndex: 0,
    onSectionChange: (i) => console.log('섹션 이동:', i),
  });

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
