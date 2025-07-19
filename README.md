# Flickview

**flickview** is a full-page scroll utility for React that allows screen transitions by section, based on **wheel**, **keyboard**, and **touch** input.

Designed with user experience and scalability in mind, it enables smooth section-by-section navigation with minimal setup.

<br/>

## Installation

```bash
npm install flickview
```

<br/>

## Basic usage

```tsx
import { FlickView } from 'flickview';

function App() {
  return (
    <FlickView>
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
    </FlickView>
  );
}
// Each section should have full height (e.g. 100vh) for proper scrolling.
```

<br/>

## Props

| Name              | Type                      | Description                                                 |
| ----------------- | ------------------------- | ----------------------------------------------------------- |
| `startIndex`      | `number`                  | Index of the section to show on initial render (default: 0) |
| `onSectionChange` | `(index: number) => void` | Callback function fired when the section changes            |

<br/>

## Using individual hooks

```tsx
import { useRef } from 'react';
import { useWheel } from '../hooks/useWheel';

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useWheel({ ref: containerRef, sectionCount: 3 });

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <section style={{ height: '100vh', backgroundColor: '#f99' }}>Section 1</section>
      <section style={{ height: '100vh', backgroundColor: '#9f9' }}>Section 2</section>
      <section style={{ height: '100vh', backgroundColor: '#99f' }}>Section 3</section>
    </div>
  );
}
```

<br/>

## Build environment

- Supports both ESM and CommonJS module formats (exports.import, exports.require)

- Includes .d.ts type definition files (exports.types)

- Built using Vite + TypeScript Compiler, with separated output directories (dist, dist-types)
